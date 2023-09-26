from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/company/search', methods=['GET'])
def search():
    keyword = request.args.get('keyword', '')
    # Your implementation here
    return jsonify({}), 200

if __name__ == '__main__':
    app.run()
