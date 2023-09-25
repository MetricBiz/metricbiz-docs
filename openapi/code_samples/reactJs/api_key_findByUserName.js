import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [apiKey, setApiKey] = useState('');

    useEffect(() => {
        axios.get('/api/apikey/apiKey')
        .then(response => {
            setApiKey(response.data.apiKey);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    return (
        <div className="App">
            <h1>API Key</h1>
            <p>Your API Key: {apiKey}</p>
        </div>
    );
}

export default App;
