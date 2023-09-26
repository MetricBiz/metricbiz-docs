const express = require('express');
const app = express();
const port = 3000;

app.get('/api/company/top-10-companies-by-caen', (req, res) => {
    const caen = req.query.caen || '';
    const year = parseInt(req.query.year) || 0;
    const county = req.query.county || '';
    const pageNumber = parseInt(req.query.pageNumber) || 0;
    const pageSize = parseInt(req.query.pageSize) || 20;
    const sortBy = req.query.sortBy || 'caen';

    // Your implementation here

    res.status(200).json({});
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
