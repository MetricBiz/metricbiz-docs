const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/user/saveUser', (req, res) => {
    const userDto = req.body;

    // Logic to save the user (registration)
    if (saveNewUser(userDto)) {
        const user = { UserId: 123, Username: userDto.Username, Email: userDto.Email };
        res.status(200).json(user);
    } else {
        res.status(400).json({ ErrorMessage: 'User registration failed' });
    }
});

function saveNewUser(userDto) {
    // Implement your user registration logic here
    // For demonstration purposes, assume the user is successfully registered
    return true;
}

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
