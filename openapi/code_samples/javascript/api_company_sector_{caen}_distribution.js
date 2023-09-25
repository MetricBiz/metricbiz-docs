const express = require('express');
const app = express();
const port = 3000;

app.get('/api/company/sector-distribution/:caen', (req, res) => {
    const caen = req.params.caen;
    // Your implementation here
    res.status(200).json({});
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
