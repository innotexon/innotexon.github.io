import fetch from 'node-fetch';

const allowedOrigins = [
  'https://innotexon.com',
  'https://www.innotexon.com',
  'https://innotexon.github.io',
];

export default async function handler(req, res) {
  const origin = req.headers.origin;
  console.log('🌐 CORS check for origin:', origin);

  if (!origin || allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  } else {
    console.warn(`🚫 CORS blocked for origin: ${origin}`);
    return res.status(403).json({ error: 'CORS not allowed from this origin' });
  }

  if (req.method === 'OPTIONS') {
    return res.status(204).end(); // Preflight response
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  if (!GEMINI_API_KEY) {
    return res.status(500).json({ error: 'Missing Gemini API key in ENV.' });
  }

  try {
    console.log('📨 Incoming request to /api/apex');
    console.log('📦 Request body:', JSON.stringify(req.body, null, 2));

    const requestBody = { ...req.body };
    if (!requestBody.maxOutputTokens) {
      requestBody.maxOutputTokens = 500;
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Gemini API Error Response:", JSON.stringify(data, null, 2));
      return res.status(response.status).json({
        error: 'Gemini API error',
        status: response.status,
        details: data,
      });
    }

    console.log("✅ Gemini response status:", response.status);
    console.log("📤 Gemini response body:", JSON.stringify(data, null, 2));

    res.status(200).json(data);
  } catch (error) {
    console.error('🔥 Proxy error to Gemini API:', error);
    res.status(500).json({
      error: 'Ape-X proxy failed to connect to Gemini',
      details: error.message,
    });
  }
}
