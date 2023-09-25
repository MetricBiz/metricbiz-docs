from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/api/location/getAllCounties', methods=['GET'])
def get_all_counties():
    # Your implementation here to retrieve the list of counties
    # Simulated data for demonstration purposes
    counties = ["County 1", "County 2", "County 3"]

    pageNumber = int(request.args.get('pageNumber', 0))
    pageSize = int(request.args.get('pageSize', 50))

    # Paginate the results
    start_index = pageNumber * pageSize
    end_index = min((pageNumber + 1) * pageSize, len(counties))
    paginated_counties = counties[start_index:end_index]

    page_string = {
        'items': paginated_counties,
        'pageNumber': pageNumber,
        'pageSize': pageSize,
        'totalItems': len(counties)
    }

    return jsonify(page_string), 200

if __name__ == '__main__':
    app.run()
