import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState([]);
    const keyword = '';

    useEffect(() => {
        axios.get('/api/company/search', {
            params: {
                keyword: keyword,
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
