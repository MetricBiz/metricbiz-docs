const express = require('express');
const app = express();
const port = 3000;

// Simulated user data for demonstration purposes
const users = [
    { id: 1, username: 'sampleuser1' },
    { id: 2, username: 'sampleuser2' },
    { id: 3, username: 'sampleuser3' }
];

app.get('/api/user/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const user = users.find(u => u.id === userId);

    if (user) {
        res.status(200).json(user);
    } else {
        res.status(400).json({ ErrorMessage: 'User not found.' });
    }
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
