const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

const router = express.Router();

// Configure Multer storage with absolute path
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${file.fieldname}${ext}`);
  },
});
const upload = multer({ storage });

// POST /api/feedback
router.post('/', upload.single('media'), async (req, res) => {
  try {
    const { message } = req.body;
    const file = req.file;

    // Validate input - require either message or file
    if (!message && !file) {
      return res.status(400).json({ message: 'Feedback message or media is required.' });
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: parseInt(process.env.SMTP_PORT) === 465, // SSL for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Setup email options
    let mailOptions = {
      from: `"Feedback Bot" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      subject: 'New Feedback Submission',
      text: message || 'No message provided.',
    };

    // Attach file if present
    if (file) {
      mailOptions.attachments = [
        {
          filename: file.filename,
          path: path.join(__dirname, 'uploads', file.filename),
        },
      ];
    }

    // Send email
    await transporter.sendMail(mailOptions);

    // Delete uploaded file after sending (optional)
    if (file) {
      fs.unlink(path.join(__dirname, 'uploads', file.filename), (err) => {
        if (err) console.error('Failed to delete uploaded file:', err);
      });
    }

    return res.status(200).json({ message: 'Feedback sent successfully' });
  } catch (error) {
    console.error('Error sending feedback:', error.message || error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;

