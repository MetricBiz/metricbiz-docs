from flask import Flask, jsonify, request
app = Flask(__name__)

@app.route('/api/user/login', methods=['POST'])
def login():
    login_user = request.json

    # Your authentication logic here
    # Simulated authentication for demonstration purposes
    if login_user['username'] == 'sampleuser' and login_user['password'] == 'password123':
        return jsonify(Token='sampleAuthToken'), 200
    else:
        return jsonify(ErrorMessage='Invalid username or password.'), 400

if __name__ == '__main__':
    app.run()
