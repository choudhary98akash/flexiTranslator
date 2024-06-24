exports.handler = async (event, context) => {
    const fetch = (await import('node-fetch')).default;
    const app = require('express');
    const cors = require('cors');
    app.use(cors());
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
    const {name, email, description } = event.body;

    const scriptUrl = `https://script.google.com/macros/s/AKfycbzPVcsytcu40OCwT4P6TOBeDVktW2SwXXNxJipwFU0sjJ3QPzkqLDHYJN-_cpRGV8xn/exec?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&description=${encodeURIComponent(description)}`;
  
    try {
      const response = await fetch(scriptUrl);
      const result = await response.text();
      return {
        statusCode: 200,
        body: JSON.stringify({ result })
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to send Feedback' })
      };
    }
  };