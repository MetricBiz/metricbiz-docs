from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/company/bankrupt-companies-active-years', methods=['GET'])
def get_bankrupt_companies_active_years():
    activity_years = int(request.args.get('activityYears', 3))
    caen = request.args.get('caen', '')
    cui = request.args.get('cui', '')
    county = request.args.get('county', '')
    page_number = int(request.args.get('pageNumber', 0))
    page_size = int(request.args.get('pageSize', 20))
    sort_by = request.args.get('sortBy', 'cui')

    # Your implementation here

    return jsonify({}), 200

if __name__ == '__main__':
    app.run()
