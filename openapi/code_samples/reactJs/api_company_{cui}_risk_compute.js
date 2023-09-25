import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [riskScores, setRiskScores] = useState([]);
    const cui = 'your_cui_value_here';

    useEffect(() => {
        axios.get(`/api/company/risk/${cui}`, {
            params: {
                currency: 'RON',
            },
        })
        .then(response => {
            setRiskScores(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    return (
        <div className="App">
            <h1>Company Risk Scores</h1>
            <ul>
                {riskScores.map((score, index) => (
                    <li key={index}>{score.Category}: {score.Score}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
