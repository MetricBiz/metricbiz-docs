import axios from 'axios';

const fetchCompanyDetails = async (cui, currency = "RON") => {
    try {
        const response = await axios.get(`https://app.metricbiz.com/v1/api/companies/${cui}`, {
            params: {
                currency: currency
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching company details:", error);
    }
}

// Usage:
// const companyDetails = fetchCompanyDetails("YOUR_CUI_HERE");
