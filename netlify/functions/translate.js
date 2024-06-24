exports.handler = async (event, context) => {
  const fetch = (await import('node-fetch')).default;
  const app = require('express');
  const cors = require('cors');
  app.use(cors());
  const { q, source, target } = event.queryStringParameters;
  const scriptUrl = `https://script.google.com/macros/s/AKfycbwQj4C3BJui2--qFzQM8Xo_o3HMo6yJnVRZCSeKS_Dw5GLnxzPDJxOQY7Ayn_E7DitD/exec?q=${encodeURIComponent(q)}&source=${encodeURIComponent(source)}&target=${encodeURIComponent(target)}`;

  try {
    const response = await fetch(scriptUrl);
    const translatedText = await response.text();
    return {
      statusCode: 200,
      body: JSON.stringify({ translatedText })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch translation' })
    };
  }
};
