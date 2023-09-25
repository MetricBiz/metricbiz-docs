import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/api/company/top-10-companies-by-caen', {
            params: {
                caen: '',
                year: 0,
                county: '',
                pageNumber: 0,
                pageSize: 20,
                sortBy: 'caen',
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
