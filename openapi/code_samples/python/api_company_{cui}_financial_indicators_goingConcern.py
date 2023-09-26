from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/company/going-concern/<string:cui>', methods=['GET'])
def get_going_concern(cui):
    currency = request.args.get('currency', 'RON')
    # Your implementation here
    return jsonify({}), 200

if __name__ == '__main__':
    app.run()
