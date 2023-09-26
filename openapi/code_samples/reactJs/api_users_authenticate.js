import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [loginUser, setLoginUser] = useState({ username: '', password: '' });
    const [token, setToken] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginUser({ ...loginUser, [name]: value });
    };

    const handleLogin = () => {
        axios.post('/api/user/login', loginUser)
        .then(response => {
            setToken(response.data.Token);
            setErrorMessage('');
        })
        .catch(error => {
            setToken('');
            setErrorMessage(error.response.data.ErrorMessage || 'An error occurred.');
        });
    };

    return (
        <div className="App">
            <h1>User Login</h1>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={loginUser.username}
                onChange={handleInputChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginUser.password}
                onChange={handleInputChange}
            />
            <button onClick={handleLogin}>Login</button>
            {token && <p>Authentication Token: {token}</p>}
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
}

export default App;
