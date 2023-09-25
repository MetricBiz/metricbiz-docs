const express = require('express');
const app = express();
const port = 3000;

app.get('/api/location/getAllCounties', (req, res) => {
    // Your implementation here to retrieve the list of counties
    // Simulated data for demonstration purposes
    const counties = ["County 1", "County 2", "County 3"];

    const pageNumber = parseInt(req.query.pageNumber) || 0;
    const pageSize = parseInt(req.query.pageSize) || 50;

    // Paginate the results
    const startIndex = pageNumber * pageSize;
    const endIndex = Math.min((pageNumber + 1) * pageSize, counties.length);
    const paginatedCounties = counties.slice(startIndex, endIndex);

    const pageString = {
        items: paginatedCounties,
        pageNumber: pageNumber,
        pageSize: pageSize,
        totalItems: counties.length
    };

    res.status(200).json(pageString);
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
