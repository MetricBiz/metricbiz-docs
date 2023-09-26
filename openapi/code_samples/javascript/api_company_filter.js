const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/company/list-indicators', (req, res) => {
    const companyFilterCriteria = req.query.companyFilterCriteria;
    // Your implementation here
    res.status(200).json({});
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
