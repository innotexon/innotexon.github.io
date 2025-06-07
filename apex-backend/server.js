const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

console.log("🔍 ENV Loaded? ", !!process.env.GEMINI_API_KEY);
console.log("🔑 GEMINI_API_KEY:", process.env.GEMINI_API_KEY?.slice(0, 10) + '...');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/apex', async (req, res) => {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      }
    );

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error('🔥 Proxy error to Gemini API:', error);
    res.status(500).json({ error: 'Ape-X proxy failed to connect to Gemini' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Ape-X backend (Gemini Flash 2.0 mode) running at http://localhost:${PORT}`);
});
