const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/user/logout', (req, res) => {
    // Logic to log out the user and invalidate the token
    if (logoutUser()) {
        res.status(200).json({ Message: 'User logged out successfully' });
    } else {
        res.status(400).json({ ErrorMessage: 'Logout failed' });
    }
});

function logoutUser() {
    // Implement your logout logic here
    // For demonstration purposes, assume the user is successfully logged out
    return true;
}

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
