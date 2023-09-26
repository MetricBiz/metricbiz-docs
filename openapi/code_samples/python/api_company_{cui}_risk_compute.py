from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/company/risk/<string:cui>', methods=['GET'])
def get_company_risk(cui):
    currency = request.args.get('currency', 'RON')
    # Your implementation here to compute the risk
    risk_scores = [
        {'Score': 75, 'Category': 'Moderate'},
        {'Score': 60, 'Category': 'Low'}
    ]
    return jsonify(risk_scores), 200

if __name__ == '__main__':
    app.run()
