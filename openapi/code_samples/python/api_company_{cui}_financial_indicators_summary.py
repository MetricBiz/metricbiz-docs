from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/company/summary/<string:cui>', methods=['GET'])
def get_summary(cui):
    currency = request.args.get('currency', 'RON')
    # Your implementation here
    return jsonify({}), 200

if __name__ == '__main__':
    app.run()
