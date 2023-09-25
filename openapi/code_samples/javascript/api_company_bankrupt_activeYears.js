const express = require('express');
const app = express();
const port = 3000;

app.get('/api/company/bankrupt-companies-active-years', (req, res) => {
    const activityYears = parseInt(req.query.activityYears) || 3;
    const caen = req.query.caen || '';
    const cui = req.query.cui || '';
    const county = req.query.county || '';
    const pageNumber = parseInt(req.query.pageNumber) || 0;
    const pageSize = parseInt(req.query.pageSize) || 20;
    const sortBy = req.query.sortBy || 'cui';

    // Your implementation here

    res.status(200).json({});
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
