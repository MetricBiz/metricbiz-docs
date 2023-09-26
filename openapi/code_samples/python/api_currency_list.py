from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/currency/currencies', methods=['GET'])
def get_all_currencies():
    supported_currencies = ["USD", "EUR", "GBP", "JPY"]
    # Add more currencies here
    return jsonify(supported_currencies), 200

if __name__ == '__main__':
    app.run()
