const express = require('express');
const app = express();
const port = 3000;

app.get('/api/company/risk/:cui', (req, res) => {
    const cui = req.params.cui;
    const currency = req.query.currency || 'RON';
    // Your implementation here to compute the risk
    const riskScores = [
        { Score: 75, Category: 'Moderate' },
        { Score: 60, Category: 'Low' }
    ];
    res.status(200).json(riskScores);
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
