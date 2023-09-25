const express = require('express');
const app = express();
const port = 3000;

app.get('/api/location/getAllCitiesByCounty/:county', (req, res) => {
    const county = req.params.county;

    // Your implementation here to retrieve the list of cities for the given county
    // Simulated data for demonstration purposes
    const cities = [
        { CityName: "City 1", CountyName: county },
        { CityName: "City 2", CountyName: county },
        { CityName: "City 3", CountyName: county }
    ];

    const pageNumber = parseInt(req.query.pageNumber) || 0;
    const pageSize = parseInt(req.query.pageSize) || 50;

    // Filter cities by the specified county
    const citiesInCounty = cities.filter(city => city.CountyName === county);

    // Paginate the results
    const startIndex = pageNumber * pageSize;
    const endIndex = Math.min((pageNumber + 1) * pageSize, citiesInCounty.length);
    const paginatedCities = citiesInCounty.slice(startIndex, endIndex);

    const pageCityDetails = {
        items: paginatedCities,
        pageNumber: pageNumber,
        pageSize: pageSize,
        totalItems: citiesInCounty.length
    };

    res.status(200).json(pageCityDetails);
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
