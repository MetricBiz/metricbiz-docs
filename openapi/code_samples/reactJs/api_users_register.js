import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [userDto, setUserDto] = useState({
        Username: '',
        Email: ''
    });
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserDto({ ...userDto, [name]: value });
    };

    const saveUser = () => {
        axios.post('/api/user/saveUser', userDto)
            .then(response => {
                setUser(response.data);
                setErrorMessage('');
            })
            .catch(error => {
                setUser(null);
                setErrorMessage(error.response.data.ErrorMessage || 'User registration failed.');
            });
    };

    return (
        <div className="App">
            <h1>User Registration</h1>
            <label>Username:</label>
            <input type="text" name="Username
