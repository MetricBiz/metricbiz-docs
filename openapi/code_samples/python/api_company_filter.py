from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/company/list-indicators', methods=['GET'])
def list_indicators():
    company_filter_criteria = request.args.get('companyFilterCriteria')
    # Your implementation here
    return jsonify({}), 200

if __name__ == '__main__':
    app.run()
