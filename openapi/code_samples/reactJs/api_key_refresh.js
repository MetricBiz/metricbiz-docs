import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [apiKey, setApiKey] = useState('');

    const refreshApiKey = () => {
        axios.post('/api/apikey/refreshApiKey')
        .then(response => {
            setApiKey(response.data.apiKey);
        })
        .catch(error => {
            console.error(error);
        });
    }

    useEffect(() => {
        // Initial API key retrieval
        refreshApiKey();
    }, []);

    return (
        <div className="App">
            <h1>API Key</h1>
            <p>Your Refreshed API Key: {apiKey}</p>
            <button onClick={refreshApiKey}>Refresh API Key</button>
        </div>
    );
}

export default App;
