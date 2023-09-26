from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/company/sector-average/<string:caen>', methods=['GET'])
def get_sector_average_by_caen(caen):
    # Your implementation here
    return jsonify({}), 200

if __name__ == '__main__':
    app.run()
