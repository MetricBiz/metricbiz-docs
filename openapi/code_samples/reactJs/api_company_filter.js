import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState([]);
    const companyFilterCriteria = {
        // Define your CompanyFilterCriteria object here
    };

    useEffect(() => {
        axios.get('/api/company/list-indicators', {
            params: {
                companyFilterCriteria: JSON.stringify(companyFilterCriteria),
            },
        })
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    return (
        <div className="App">
            {/* Your React component rendering here */}
        </div>
    );
}

export default App;
