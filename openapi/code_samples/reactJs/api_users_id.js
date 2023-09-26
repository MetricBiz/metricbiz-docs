import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [userId, setUserId] = useState('');
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleUserIdChange = (e) => {
        setUserId(e.target.value);
    };

    const handleFindUser = () => {
        axios.get(`/api/user/${userId}`)
            .then(response => {
                setUser(response.data);
                setErrorMessage('');
            })
            .catch(error => {
                setUser(null);
                setErrorMessage(error.response.data.ErrorMessage || 'User not found.');
            });
    };

    return (
        <div className="App">
            <h1>Find User by ID</h1>
            <input
                type="text"
                placeholder="User ID"
                value={userId}
                onChange={handleUserIdChange}
            />
            <button onClick={handleFindUser}>Find User</button>
            {user && (
                <div>
                    <h2>User Details</h2>
                    <p>ID: {user.id}</p>
                    <p>Username: {user.username}</p>
