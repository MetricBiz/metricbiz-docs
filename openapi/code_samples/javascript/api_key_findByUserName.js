const express = require('express');
const app = express();
const port = 3000;

app.get('/api/apikey/apiKey', (req, res) => {
    // Your implementation here to retrieve the API key
    const apiKeyResponse = {
        apiKey: 'your_api_key_here'
    };
    res.status(200).json(apiKeyResponse);
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
