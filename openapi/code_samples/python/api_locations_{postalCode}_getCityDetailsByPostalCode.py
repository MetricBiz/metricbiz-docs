from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/api/location/findByPostalCode/<postalCode>', methods=['GET'])
def find_by_postal_code(postalCode):
    # Your implementation here to retrieve city details by postal code
    # Simulated data for demonstration purposes
    cities = [
        {"Name": "City 1", "PostalCode": postalCode},
        {"Name": "City 2", "PostalCode": postalCode},
        {"Name": "City 3", "PostalCode": postalCode}
    ]

    return jsonify(cities)

if __name__ == '__main__':
    app.run()
