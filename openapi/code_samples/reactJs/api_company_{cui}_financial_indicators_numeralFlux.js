import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState([]);
    const cui = 'your_cui_value_here';

    useEffect(() => {
        axios.get(`/api/company/numeral-flux/${cui}`, {
            params: {
                currency: 'RON',
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
