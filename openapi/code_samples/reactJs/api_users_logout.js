import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const logoutUser = () => {
        axios.post('/api/user/logout')
            .then(response => {
                setMessage(response.data.Message || '');
                setErrorMessage('');
            })
            .catch(error => {
                setMessage('');
                setErrorMessage(error.response.data.ErrorMessage || 'Logout failed.');
            });
    };

    return (
        <div className="App">
            <h1>User Logout</h1>
            <button onClick={logoutUser}>Logout</button>
            {message && <p>{message}</p>}
            {errorMessage && <p>Error: {errorMessage}</p>}
        </div>
    );
}

export default App;
