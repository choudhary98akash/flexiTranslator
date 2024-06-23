exports.handler = async (event, context) => {
  // Dynamically import node-fetch
  const fetch = (await import('node-fetch')).default;

  // Parse query parameters from the event object
  const { q, source, target } = event.queryStringParameters;

  // Construct the URL with the parameters to call your Google Apps Script
  const scriptUrl = `https://script.google.com/macros/s/AKfycbwQj4C3BJui2--qFzQM8Xo_o3HMo6yJnVRZCSeKS_Dw5GLnxzPDJxOQY7Ayn_E7DitD/exec?q=${encodeURIComponent(q)}&source=${encodeURIComponent(source)}&target=${encodeURIComponent(target)}`;

  try {
    // Fetch the response from the Google Apps Script URL
    const response = await fetch(scriptUrl);
    const translatedText = await response.text();

    // Return the response
    return {
      statusCode: 200,
      body: JSON.stringify({ translatedText }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    // Handle errors
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch translation' }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
};
