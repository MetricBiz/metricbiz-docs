const express = require('express');
const app = express();
const port = 3000;

app.get('/api/currency/currencies', (req, res) => {
    const supportedCurrencies = ["USD", "EUR", "GBP", "JPY"];
    // Add more currencies here
    res.status(200).json(supportedCurrencies);
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
