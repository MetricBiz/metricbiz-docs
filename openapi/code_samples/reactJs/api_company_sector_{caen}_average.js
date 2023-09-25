import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState([]);
    const caen = 'your_caen_value_here';

    useEffect(() => {
        axios.get(`/api/company/sector-average/${caen}`)
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
