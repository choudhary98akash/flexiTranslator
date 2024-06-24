const fetch = require('node-fetch');

exports.handler = async (event, context) => {
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

    // Parse the request body
    let body;
    try {
        body = JSON.parse(event.body);
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Invalid request body' }),
        };
    }

    const { name, email, description } = body;

    // Validate required fields
    if (!name || !email || !description) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Missing required fields' }),
        };
    }

    const scriptUrl = `https://script.google.com/macros/s/AKfycbzPVcsytcu40OCwT4P6TOBeDVktW2SwXXNxJipwFU0sjJ3QPzkqLDHYJN-_cpRGV8xn/exec?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&description=${encodeURIComponent(description)}`;

    try {
        const response = await fetch(scriptUrl);
        const result = await response.text();
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({ result }),
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
