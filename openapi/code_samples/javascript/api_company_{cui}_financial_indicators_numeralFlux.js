const express = require('express');
const app = express();
const port = 3000;

app.get('/api/company/numeral-flux/:cui', (req, res) => {
    const cui = req.params.cui;
    const currency = req.query.currency || 'RON';
    // Your implementation here
    res.status(200).json({});
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
