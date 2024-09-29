exports.handler = async (event, context) => {
    const fetch = (await import('node-fetch')).default;
  
    // Handle preflight request for CORS
    if (event.httpMethod === 'OPTIONS') {
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      };
    }
  
    // Ensure the request is a POST request
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'Method not allowed' }),
      };
    }
  
    // Parse the body of the POST request (assuming JSON)
    const data = JSON.parse(event.body);
  
    // Validate required fields
    if (!data.name || !data.gender || !data.selections) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }
  
    // Construct the request to your Google Apps Script
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbzjr8oPRc9NVyaa6wOF9Ty90lMoPigOnfPiqc8QPLxyCUKXxU9_G0CiCwr9P7wAAusN/exec';
  
    try {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const resultText = await response.text();
  
      // Attempt to parse the response as JSON
      let result;
      try {
        result = JSON.parse(resultText);
      } catch (error) {
        result = { text: resultText };
      }
  
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(result),
      };
    } catch (error) {
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'Failed to send data to Google Apps Script' }),
      };
    }
  };
  