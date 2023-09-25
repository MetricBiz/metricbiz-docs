import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState([]);
    const queryParams = {
        pageNo: 0,
        pageSize: 10,
        cuiOrName: '',
        sortBy: 'name',
        currency: 'RON',
    };

    useEffect(() => {
        axios.get('/api/company/find', {
            params: queryParams,
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
