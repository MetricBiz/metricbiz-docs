import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [counties, setCounties] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(50);

    const getAllCounties = () => {
        axios.get(`/api/location/getAllCounties?pageNumber=${pageNumber}&pageSize=${pageSize}`)
        .then(response => {
            setCounties(response.data.items);
        })
        .catch(error => {
            console.error(error);
        });
    }

    useEffect(() => {
        // Initial retrieval of counties
        getAllCounties();
    }, [pageNumber, pageSize]);

    return (
        <div className="App">
            <h1>Counties</h1>
            <p>Page Number: {pageNumber}</p>
            <p>Page Size: {pageSize}</p>
            <ul>
                {counties.map((county, index) => (
                    <li key={index}>{county}</li>
                ))}
            </ul>
            <button onClick={() => setPageNumber(pageNumber - 1)}>Previous Page</button>
            <button onClick={() => setPageNumber(pageNumber + 1)}>Next Page</button>
        </div>
    );
}

export default App;
