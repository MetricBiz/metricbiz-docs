from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/api/user/userPing', methods=['GET'])
def user_ping():
    # Logic to check if the user is authenticated
    if user_is_authenticated():
        return jsonify({'Authenticated': True}), 200
    else:
        return jsonify({'ErrorMessage': 'User is not authenticated.'}), 400

def user_is_authenticated():
    # Implement your authentication logic here
    # For demonstration purposes, assume the user is authenticated
    return True

if __name__ == '__main__':
    app.run()
