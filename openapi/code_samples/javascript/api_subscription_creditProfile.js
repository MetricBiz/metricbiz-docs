const express = require('express');
const app = express();
const port = 3000;

app.get('/api/subscription/getActiveSubscriptionForUser', (req, res) => {
    // Your implementation here to retrieve the user's active subscription
    // Simulated data for demonstration purposes
    const userSubscription = {
        userId: "123",
        subscriptionId: "456",
        creditsRemaining: 10
    };

    res.status(200).json(userSubscription);
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
