from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/api/location/getAllCitiesByCounty/<county>', methods=['GET'])
def get_all_cities_by_county(county):
    # Your implementation here to retrieve the list of cities for the given county
    # Simulated data for demonstration purposes
    cities = [
        {"CityName": "City 1", "CountyName": county},
        {"CityName": "City 2", "CountyName": county},
        {"CityName": "City 3", "CountyName": county}
    ]

    pageNumber = int(request.args.get('pageNumber', 0))
    pageSize = int(request.args.get('pageSize', 50))

    # Filter cities by the specified county
    cities_in_county = [city for city in cities if city["CountyName"] == county]

    # Paginate the results
    start_index = pageNumber * pageSize
    end_index = min((pageNumber + 1) * pageSize, len(cities_in_county))
    paginated_cities = cities_in_county[start_index:end_index]

    page_city_details = {
        'items': paginated_cities,
        'pageNumber': pageNumber,
        'pageSize': pageSize,
        'totalItems': len(cities_in_county)
    }

    return jsonify(page_city_details), 200

if __name__ == '__main__':
    app.run()
