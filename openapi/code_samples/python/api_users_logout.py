from flask import Flask, jsonify, request
app = Flask(__name__)

@app.route('/api/user/logout', methods=['POST'])
def logout():
    # Logic to log out the user and invalidate the token
    if logout_user():
        return jsonify({'Message': 'User logged out successfully'}), 200
    else:
        return jsonify({'ErrorMessage': 'Logout failed'}), 400

def logout_user():
    # Implement your logout logic here
    # For demonstration purposes, assume the user is successfully logged out
    return True

if __name__ == '__main__':
    app.run()
