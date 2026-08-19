const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || '*';
app.use(cors({ origin: FRONTEND_ORIGIN }));
app.use(express.json());

// Connect to DB
connectDB().catch(err => {
  console.error('Failed to connect to database:', err.message);
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Mount API routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/recipes', require('./routes/recipes'));
app.use('/api/ai', require('./routes/ai'));

// Attempt to serve frontend build from common locations
const frontendRoot = path.resolve(__dirname, '..', '..', 'frontend');
const possibleBuildDirs = [path.join(frontendRoot, 'dist'), path.join(frontendRoot, 'build')];

let served = false;
for (const dir of possibleBuildDirs) {
  try {
    if (fs.existsSync(dir)) {
      app.use(express.static(dir));
      app.get('*', (req, res) => res.sendFile(path.join(dir, 'index.html')));
      console.log('Serving frontend from', dir);
      served = true;
      break;
    }
  } catch (err) {
    // ignore
  }
}

if (!served) {
  app.get('/', (req, res) => res.send('API server running. Build the frontend to serve static files.'));
}

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
