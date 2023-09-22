const cui = "YOUR_CUI_HERE";
const currency = "YOUR_CURRENCY_HERE"; // Default: RON

fetch(`https://app.metricbiz.com/v1/api/companies/${cui}?currency=${currency}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));