from flask import Flask, jsonify, request
app = Flask(__name__)

@app.route('/api/user/saveUser', methods=['POST'])
def save_user():
    user_dto = request.json

    # Logic to save the user (registration)
    if save_new_user(user_dto):
        user = {'UserId': 123, 'Username': user_dto['Username'], 'Email': user_dto['Email']}
        return jsonify(user), 200
    else:
        return jsonify({'ErrorMessage': 'User registration failed'}), 400

def save_new_user(user_dto):
    # Implement your user registration logic here
    # For demonstration purposes, assume the user is successfully registered
    return True

if __name__ == '__main__':
    app.run()
