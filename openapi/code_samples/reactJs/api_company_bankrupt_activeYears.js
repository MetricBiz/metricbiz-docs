import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/api/company/bankrupt-companies-active-years', {
            params: {
                activityYears: 3,
                caen: '',
                cui: '',
                county: '',
                pageNumber: 0,
                pageSize: 20,
                sortBy: 'cui',
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
