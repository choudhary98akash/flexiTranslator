exports.handler = async (event, context) => {
  const fetch = (await import('node-fetch')).default;

  // Handle CORS preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    };
  }

  // Extract query parameters
  const { q, source, target } = event.queryStringParameters;

  // Validate required parameters
  if (!q || !source || !target) {
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Missing required query parameters' }),
    };
  }

  // Construct the Google Apps Script URL
  const scriptUrl = `https://script.google.com/macros/s/AKfycbwQj4C3BJui2--qFzQM8Xo_o3HMo6yJnVRZCSeKS_Dw5GLnxzPDJxOQY7Ayn_E7DitD/exec?q=${encodeURIComponent(q)}&source=${encodeURIComponent(source)}&target=${encodeURIComponent(target)}`;

  try {
    // Fetch translation from Google Apps Script
    const response = await fetch(scriptUrl);
    const responseText = await response.text();

    // Attempt to parse the text as JSON
    let translatedText;
    try {
      translatedText = JSON.parse(responseText);
    } catch (error) {
      translatedText = { text: responseText };
    }

    // Return the translated text
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(translatedText),
    };
  } catch (error) {
    // Handle errors
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Failed to fetch translation' }),
    };
  }
};
