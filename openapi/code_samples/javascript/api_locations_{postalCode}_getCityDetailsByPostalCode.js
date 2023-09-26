const express = require('express');
const app = express();
const port = 3000;

app.get('/api/location/findByPostalCode/:postalCode', (req, res) => {
    const postalCode = req.params.postalCode;

    // Your implementation here to retrieve city details by postal code
    // Simulated data for demonstration purposes
    const cities = [
        { Name: "City 1", PostalCode: postalCode },
        { Name: "City 2", PostalCode: postalCode },
        { Name: "City 3", PostalCode: postalCode }
    ];

    res.status(200).json(cities);
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
