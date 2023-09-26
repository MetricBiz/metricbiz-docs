from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/company/find', methods=['GET'])
def find():
    pageNo = int(request.args.get('pageNo', 0))
    pageSize = int(request.args.get('pageSize', 10))
    cuiOrName = request.args.get('cuiOrName', '')
    sortBy = request.args.get('sortBy', 'name')
    currency = request.args.get('currency', 'RON')

    # Your implementation here

    return jsonify({}), 200

if __name__ == '__main__':
    app.run()
