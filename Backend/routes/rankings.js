const express = require('express');
const router = express.Router();
const multer = require('multer');
const xlsx = require('xlsx');
const Ranking = require('../models/Ranking');

const ALLOWED_CATEGORIES = [
  'QS World University Rankings 2025',
  'NIRF India Rankings 2025 Overall',
  'Top Universities in USA',
  'Top Universities in UK',
  'Top Universities in Asia'
];

// Sentinel value meaning "import every section, auto-mapped to its own category"
const CATEGORY_ALL = 'All';

// Multer config - memory storage for Excel files
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowed = [
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
      'application/vnd.ms-excel', // .xls
      'text/csv',
      'application/csv'
    ];
    if (allowed.includes(file.mimetype) || file.originalname.match(/\.(xlsx|xls|csv)$/i)) {
      cb(null, true);
    } else {
      cb(new Error('Only Excel (.xlsx, .xls) or CSV files are allowed'), false);
    }
  },
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});

// GET /api/rankings - Public: Get rankings with filters
router.get('/', async (req, res) => {
  try {
    const { source, year, category, country, limit = 50, page = 1, search } = req.query;
    const query = {};

    if (source) query.source = source.toUpperCase();
    if (year) query.year = parseInt(year);
    if (category) query.category = category;
    if (country) query.country = country;
    if (search) query.university = { $regex: search, $options: 'i' };

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const [rankings, total] = await Promise.all([
      Ranking.find(query)
        .sort({ rank: 1 })
        .skip(skip)
        .limit(parseInt(limit))
        .lean(),
      Ranking.countDocuments(query)
    ]);

    res.json({
      success: true,
      data: rankings,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET /api/rankings/sources - Available sources, years, categories & countries
router.get('/sources', async (req, res) => {
  try {
    const sources = await Ranking.aggregate([
      {
        $group: {
          _id: { source: '$source', year: '$year' },
          count: { $sum: 1 }
        }
      },
      { $sort: { '_id.source': 1, '_id.year': -1 } }
    ]);

    const categories = await Ranking.distinct('category');
    const countries = await Ranking.distinct('country');

    res.json({ success: true, data: sources, categories, countries });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET /api/rankings/categories/top - Top ranked university for each category
router.get('/categories/top', async (req, res) => {
  try {
    const results = await Ranking.aggregate([
      { $match: { category: { $in: ALLOWED_CATEGORIES } } },
      { $sort: { rank: 1 } },
      {
        $group: {
          _id: '$category',
          rank: { $first: '$rank' },
          university: { $first: '$university' },
          country: { $first: '$country' },
          city: { $first: '$city' },
          score: { $first: '$score' },
          source: { $first: '$source' },
          year: { $first: '$year' },
          website: { $first: '$website' }
        }
      },
      {
        $project: {
          _id: 0,
          category: '$_id',
          rank: 1,
          university: 1,
          country: 1,
          city: 1,
          score: 1,
          source: 1,
          year: 1,
          website: 1
        }
      }
    ]);

    const data = ALLOWED_CATEGORIES.map(cat => {
      const found = results.find(r => r.category === cat);
      return found || { category: cat, rank: null, university: null };
    });

    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET /api/rankings/top - Top N rankings (default top 10)
router.get('/top', async (req, res) => {
  try {
    const { source, year, limit = 10 } = req.query;
    const query = {};
    if (source) query.source = source.toUpperCase();
    if (year) query.year = parseInt(year);

    const rankings = await Ranking.find(query)
      .sort({ rank: 1 })
      .limit(parseInt(limit))
      .lean();

    res.json({ success: true, data: rankings });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST /api/rankings/upload - Admin: Upload Excel/CSV
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    const { category } = req.body;
    const isAll = category === CATEGORY_ALL;
    if (!category || (!isAll && !ALLOWED_CATEGORIES.includes(category))) {
      return res.status(400).json({ success: false, message: 'Invalid or missing category' });
    }

    // Parse Excel/CSV
    const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Read as array of arrays so we can control header detection. Ranking
    // sheets commonly have title/banner rows above the header row, and can
    // contain multiple titled sections which each carry their own header row.
    const sheetRows = xlsx.utils.sheet_to_json(sheet, { header: 1, defval: '' });

    if (sheetRows.length === 0) {
      return res.status(400).json({ success: false, message: 'File is empty' });
    }

    // Normalize a header/lookup key (case-insensitive, trimmed)
    const normalizeKey = (key) => String(key).trim().toLowerCase();

    // A header row must contain both a "rank" and a "university" column label
    const isHeaderRow = (cells) => {
      const normalized = cells.map(normalizeKey);
      return normalized.includes('rank') && normalized.includes('university');
    };

    // Build a keyed row object from a data row using the header row's labels
    const buildRow = (headerCells, dataCells) => {
      const obj = {};
      for (let i = 0; i < headerCells.length; i++) {
        const key = normalizeKey(headerCells[i]);
        if (key) obj[key] = dataCells[i] !== undefined ? dataCells[i] : '';
      }
      return obj;
    };

    // Match a section title to one of the allowed categories
    const matchCategory = (title) => {
      const t = normalizeKey(title);
      return ALLOWED_CATEGORIES.find(cat => t.includes(normalizeKey(cat))) || null;
    };

    // Locate every section: a header row plus (optionally) a title row above it
    const sections = [];
    for (let i = 0; i < sheetRows.length; i++) {
      if (isHeaderRow(sheetRows[i])) {
        const titleIdx = i - 1;
        const title = titleIdx >= 0 ? String(sheetRows[titleIdx]?.[0] || '').trim() : '';
        sections.push({ headerIdx: i, title, dataStart: i + 1 });
      }
    }

    // Bound each section's data rows (up to just before the next section's header)
    for (let k = 0; k < sections.length; k++) {
      sections[k].dataEnd = k + 1 < sections.length ? sections[k + 1].headerIdx - 1 : sheetRows.length;
    }

    // Build keyed rows. Each row carries the category it will be stored under.
    // Two file layouts are supported:
    //   Flat table with a 'Category' column (each row carries its own category).
    //   Titled sections where the category is derived from the section heading.
    // With 'All': every valid row is imported (using its own or its section's category).
    // With a specific category: only matching rows are imported.
    const rowsByCategory = [];
    for (const sec of sections) {
      const sectionRows = [];
      for (let j = sec.dataStart; j < sec.dataEnd; j++) {
        const dataCells = sheetRows[j];
        if (!dataCells || !dataCells.length || dataCells.every(c => String(c).trim() === '')) continue;
        sectionRows.push(buildRow(sheetRows[sec.headerIdx], dataCells));
      }
      if (!sectionRows.length) continue;

      // Check if the header contains an explicit 'category' column (flat-table)
      const hasCategoryColumn = Object.keys(sectionRows[0]).some(
        k => normalizeKey(k) === 'category'
      );

      if (hasCategoryColumn) {
        // Flat-table: each row's category comes from its own 'category' column
        const grouped = {};
        for (const row of sectionRows) {
          const rowCat = String(row.category || '').trim();
          if (!rowCat || !ALLOWED_CATEGORIES.includes(rowCat)) continue;
          if (!grouped[rowCat]) grouped[rowCat] = [];
          grouped[rowCat].push(row);
        }
        for (const [rowCat, catRows] of Object.entries(grouped)) {
          if (!isAll && rowCat !== category) continue;
          rowsByCategory.push({ category: rowCat, rows: catRows });
        }
      } else {
        // Titled-section format: category derived from the title row above
        let secCategory = matchCategory(sec.title);
        if (isAll) {
          if (!secCategory) continue; // cannot map → skip
        } else {
          secCategory = category; // specific selection applies to all rows
        }
        rowsByCategory.push({ category: secCategory, rows: sectionRows });
      }
    }

    const rows = rowsByCategory.flatMap(s => s.rows);

    if (rows.length === 0) {
      return res.status(400).json({ success: false, message: 'File is empty' });
    }

    const validSources = ['QS', 'THE', 'NIRF', 'USNEWS', 'SHANGHAI', 'EDURANK', 'WEBOMETRICS'];
    const sourceMap = {
      'USNEWS': 'USNews',
      'SHANGHAI': 'Shanghai',
      'EDURANK': 'EduRank',
      'WEBOMETRICS': 'Webometrics',
      'NIRF OVERALL': 'NIRF'
    };

    const errors = [];
    const toInsert = [];
    const seen = new Set();

    // Robustly normalize a numeric rank value (number or numeric string).
    // Returns NaN for genuinely invalid values so they are rejected below.
    const normalizeRank = (value) => {
      if (value === null || value === undefined) return NaN;
      if (typeof value === 'number') return Number.isFinite(value) ? value : NaN;
      const str = String(value).trim();
      if (str === '') return NaN;
      const num = Number(str);
      return Number.isFinite(num) ? num : NaN;
    };

    rowsByCategory.forEach(({ category: rowCategory, rows: groupRows }) => {
      groupRows.forEach((row, index) => {
        const rowNum = index + 2; // Excel row (1-based + header)

        // Map columns flexibly
        const getVal = (...keys) => {
          for (const k of keys) {
            const found = Object.keys(row).find(h => normalizeKey(h) === normalizeKey(k));
            if (found !== undefined) return row[found];
          }
          return '';
        };

        const rank = normalizeRank(getVal('Rank', 'rank'));
        const university = String(getVal('University', 'university', 'Name')).trim();
        const country = String(getVal('Country', 'country')).trim();
        const city = String(getVal('City', 'city')).trim();
        const score = parseFloat(getVal('Score', 'score'));
        const year = parseInt(getVal('Year', 'year'));
        const rawSource = String(getVal('Source', 'source', 'Ranking Source')).trim().toUpperCase();
        const website = String(getVal('Official Website URL', 'website', 'url', 'Official URL')).trim();

        // Validate
        if (!Number.isInteger(rank) || rank < 1) {
          errors.push(`Row ${rowNum}: Invalid Rank`);
          return;
        }
        if (!university) {
          errors.push(`Row ${rowNum}: University name is required`);
          return;
        }
        if (!country) {
          errors.push(`Row ${rowNum}: Country is required`);
          return;
        }
        if (isNaN(score)) {
          errors.push(`Row ${rowNum}: Invalid Score`);
          return;
        }
        if (!year || isNaN(year) || year < 2000 || year > 2100) {
          errors.push(`Row ${rowNum}: Invalid Year`);
          return;
        }

        // Normalize source name, then validate against the allowed set
        const source = sourceMap[rawSource] || rawSource;
        if (!rawSource || !validSources.includes(source)) {
          errors.push(`Row ${rowNum}: Invalid Source (use QS, THE, NIRF, USNews, Shanghai, EduRank, Webometrics)`);
          return;
        }

        // Duplicate detection is category-aware, matching the unique DB index
        const key = `${source}-${year}-${rank}-${rowCategory}`;
        if (seen.has(key)) {
          errors.push(`Row ${rowNum}: Duplicate rank ${rank} for ${source} ${year}`);
          return;
        }
        seen.add(key);

        toInsert.push({
          rank,
          university,
          country,
          city,
          score,
          year,
          source,
          category: rowCategory,
          website
        });
      });
    });

    if (toInsert.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No valid rows found',
        errors
      });
    }

    // Upsert: replace existing for same source+year+rank
    let inserted = 0;
    let updated = 0;

    for (const item of toInsert) {
      const result = await Ranking.findOneAndUpdate(
        { source: item.source, year: item.year, rank: item.rank, category: item.category },
        item,
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
      if (result.createdAt.getTime() === result.updatedAt.getTime()) {
        inserted++;
      } else {
        updated++;
      }
    }

    res.json({
      success: true,
      message: `Import completed: ${inserted} new, ${updated} updated`,
      imported: toInsert.length,
      errors: errors.length > 0 ? errors : undefined
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE /api/rankings - Admin: Clear rankings by source/year (optional)
router.delete('/', async (req, res) => {
  try {
    const { source, year } = req.query;
    if (!source) {
      return res.status(400).json({ success: false, message: 'source query param required' });
    }
    const query = { source: source.toUpperCase() };
    if (year) query.year = parseInt(year);

    const result = await Ranking.deleteMany(query);
    res.json({
      success: true,
      message: `Deleted ${result.deletedCount} records`
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
