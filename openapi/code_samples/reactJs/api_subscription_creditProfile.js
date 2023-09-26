import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [userSubscription, setUserSubscription] = useState(null);

    const getActiveSubscriptionForUser = () => {
        axios.get('/api/subscription/getActiveSubscriptionForUser')
        .then(response => {
            setUserSubscription(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }

    useEffect(() => {
        // Initial retrieval of active subscription for the user
        getActiveSubscriptionForUser();
    }, []);

    return (
        <div className="App">
            <h1>User Subscription Details</h1>
            {userSubscription ? (
                <div>
                    <p>User ID: {userSubscription.userId}</p>
                    <p>Subscription ID: {userSubscription.subscriptionId}</p>
                    <p>Credits Remaining: {userSubscription.creditsRemaining}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default App;
