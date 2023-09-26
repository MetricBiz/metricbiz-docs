import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [cities, setCities] = useState([]);
    const postalCode = "YourPostalCode"; // Replace with the actual postal code

    const findByPostalCode = () => {
        axios.get(`/api/location/findByPostalCode/${postalCode}`)
        .then(response => {
            setCities(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }

    useEffect(() => {
        // Initial retrieval of city details by postal code
        findByPostalCode();
    }, []);

    return (
        <div className="App">
            <h1>Cities for Postal Code {postalCode}</h1>
            <ul>
                {cities.map((city, index) => (
                    <li key={index}>{city.Name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
