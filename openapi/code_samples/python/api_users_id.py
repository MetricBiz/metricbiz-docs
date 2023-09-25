from flask import Flask, jsonify
app = Flask(__name__)

# Simulated user data for demonstration purposes
users = [
    { 'id': 1, 'username': 'sampleuser1' },
    { 'id': 2, 'username': 'sampleuser2' },
    { 'id': 3, 'username': 'sampleuser3' }
]

@app.route('/api/user/<int:userId>', methods=['GET'])
def find_user_by_id(userId):
    user = next((u for u in users if u['id'] == userId), None)
    if user:
        return jsonify(user), 200
    else:
        return jsonify(ErrorMessage='User not found.'), 400

if __name__ == '__main__':
    app.run()
