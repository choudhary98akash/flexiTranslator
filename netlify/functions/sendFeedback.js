
exports.handler = async (event, context) => {
  const fetch = (await import('node-fetch')).default;
  // Handle preflight request for CORS
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

  const { name, email, description } = event.queryStringParameters;

  // Validate required fields
  if (!name || !email || !description) {
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Missing required fields' }),
    };
  }

  const scriptUrl = `https://script.google.com/macros/s/AKfycbzKmEeIEGNBloR31TnbE3J64bwAsmc4CZ9J3hhhIlC04y1BMOklbybLl-_-wzngUYpU/exec?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&description=${encodeURIComponent(description)}`;

  try {
    const response = await fetch(scriptUrl);
    const result = await response.text();
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ result : response}),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Failed to send feedback' }),
    };
  }
};
