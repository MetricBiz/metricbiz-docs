import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [cities, setCities] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(50);

    const county = "YourCounty"; // Replace with the actual county name

    const getAllCitiesByCounty = () => {
        axios.get(`/api/location/getAllCitiesByCounty/${county}?pageNumber=${pageNumber}&pageSize=${pageSize}`)
        .then(response => {
            setCities(response.data.items);
        })
        .catch(error => {
            console.error(error);
        });
    }

    useEffect(() => {
        // Initial retrieval of cities by county
        getAllCitiesByCounty();
    }, [pageNumber, pageSize]);

    return (
        <div className="App">
            <h1>Cities in {county}</h1>
            <p>Page Number: {pageNumber}</p>
            <p>Page Size: {pageSize}</p>
            <ul>
                {cities.map((city, index) => (
                    <li key={index}>{city.CityName}</li>
                ))}
            </ul>
            <button onClick={() => setPageNumber(pageNumber - 1)}>Previous Page</button>
            <button onClick={() => setPageNumber(pageNumber + 1)}>Next Page</button>
        </div>
    );
}

export default App;
