const express = require('express');
const app = express();
const port = 3000;

app.get('/api/user/userPing', (req, res) => {
    // Logic to check if the user is authenticated
    if (userIsAuthenticated()) {
        res.status(200).json({ Authenticated: true });
    } else {
        res.status(400).json({ ErrorMessage: 'User is not authenticated.' });
    }
});

function userIsAuthenticated() {
    // Implement your authentication logic here
    // For demonstration purposes, assume the user is authenticated
    return true;
}

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
