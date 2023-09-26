import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        axios.get('/api/currency/currencies')
        .then(response => {
            setCurrencies(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    return (
        <div className="App">
            <h1>Supported Currencies</h1>
            <ul>
                {currencies.map((currency, index) => (
                    <li key={index}>{currency}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
