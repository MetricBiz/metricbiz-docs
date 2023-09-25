import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [authenticated, setAuthenticated] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        axios.get('/api/user/userPing')
            .then(response => {
                setAuthenticated(response.data.Authenticated);
                setErrorMessage('');
            })
            .catch(error => {
                setAuthenticated(false);
                setErrorMessage(error.response.data.ErrorMessage || 'User is not authenticated.');
            });
    }, []);

    return (
        <div className="App">
            <h1>User Authentication Status</h1>
            <p>Authenticated: {authenticated ? 'Yes' : 'No'}</p>
            {errorMessage && <p>Error: {errorMessage}</p>}
        </div>
    );
}

export default App;
