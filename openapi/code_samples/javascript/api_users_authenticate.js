const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());

app.post('/api/user/login', (req, res) => {
    const loginUser = req.body;

    // Your authentication logic here
    // Simulated authentication for demonstration purposes
    if (loginUser.username === 'sampleuser' && loginUser.password === 'password123') {
        res.status(200).json({ Token: 'sampleAuthToken' });
    } else {
        res.status(400).json({ ErrorMessage: 'Invalid username or password.' });
    }
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
