const mongoose = require('mongoose');

const rankingSchema = new mongoose.Schema({
  rank: {
    type: Number,
    required: true
  },
  university: {
    type: String,
    required: true,
    trim: true
  },
  country: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    trim: true,
    default: ''
  },
  score: {
    type: Number,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  source: {
    type: String,
    required: true,
    enum: ['QS', 'THE', 'NIRF', 'USNews', 'Shanghai', 'EduRank', 'Webometrics'],
    uppercase: true
  },
  category: {
    type: String,
    required: true,
    index: true
  },
  website: {
    type: String,
    trim: true,
    default: ''
  }
}, {
  timestamps: true
});

// Compound index for unique ranking per source + year + rank + category
rankingSchema.index({ source: 1, year: 1, rank: 1, category: 1 }, { unique: true });
// Index for common queries
rankingSchema.index({ source: 1, year: 1, score: -1 });
rankingSchema.index({ university: 'text' });

module.exports = mongoose.model('Ranking', rankingSchema);
