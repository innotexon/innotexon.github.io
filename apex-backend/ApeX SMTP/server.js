require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const feedbackRoute = require('./feedback.route');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Static folder for uploaded files (optional)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes - just mount the router here, no multer middleware at this level
app.use('/api/feedback', feedbackRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
