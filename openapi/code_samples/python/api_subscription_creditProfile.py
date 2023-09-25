from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/api/subscription/getActiveSubscriptionForUser', methods=['GET'])
def get_active_subscription_for_user():
    # Your implementation here to retrieve the user's active subscription
    # Simulated data for demonstration purposes
    user_subscription = {
        "userId": "123",
        "subscriptionId": "456",
        "creditsRemaining": 10
    }

    return jsonify(user_subscription)

if __name__ == '__main__':
    app.run()
