require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dns = require('dns');
const rankingsRouter = require('./routes/rankings');

// DNS fix: force public resolvers so MongoDB Atlas SRV lookups succeed even
// when the machine's default resolver (e.g. a local proxy on 127.0.0.1)
// refuses SRV queries to *.mongodb.net.
dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/rankings', rankingsRouter);

// Health check
app.get('/', (req, res) => {
  res.json({
    message: 'University Rankings API is running',
    endpoints: {
      'GET /api/rankings': 'List rankings (filters: source, year, search, page, limit)',
      'GET /api/rankings/top': 'Top rankings (filters: source, year, limit)',
      'GET /api/rankings/sources': 'Available sources & years',
      'GET /api/rankings/categories/top': 'Top ranked university for each category',
      'POST /api/rankings/upload': 'Admin: Upload Excel/CSV (form-data key: file)',
      'DELETE /api/rankings?source=QS&year=2025': 'Admin: Delete rankings'
    }
  });
});

// Connect DB & start
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  });
