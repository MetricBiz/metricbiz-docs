import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/location")
public class LocationController {

    @GetMapping("/getAllCitiesByCounty/{county}")
    public ResponseEntity<PageCityDetailsModel> getAllCitiesByCounty(
            @PathVariable String county,
            @RequestParam(defaultValue = "0") int pageNumber,
            @RequestParam(defaultValue = "50") int pageSize) {
        // Your implementation here to retrieve the list of cities for the given county
        // Simulated data for demonstration purposes
        List<CityDetailsModel> cities = Arrays.asList(
                new CityDetailsModel("City 1", county),
                new CityDetailsModel("City 2", county),
                new CityDetailsModel("City 3", county)
        );

        // Filter cities by the specified county
        List<CityDetailsModel> citiesInCounty = cities.stream()
                .filter(city -> city.getCountyName().equals(county))
                .collect(Collectors.toList());

        // Paginate the results
        List<CityDetailsModel> paginatedCities = citiesInCounty
                .subList(pageNumber * pageSize, Math.min((pageNumber + 1) * pageSize, citiesInCounty.size()));

        PageCityDetailsModel pageCityDetails = new PageCityDetailsModel();
        pageCityDetails.setItems(paginatedCities);
        pageCityDetails.setPageNumber(pageNumber);
        pageCityDetails.setPageSize(pageSize);
        pageCityDetails.setTotalItems(citiesInCounty.size());

        return ResponseEntity.ok(pageCityDetails);
    }
}

@Data
@AllArgsConstructor
class CityDetailsModel {
    private String cityName;
    private String countyName;
}

@Data
class PageCityDetailsModel {
    private List<CityDetailsModel> items;
    private int pageNumber;
    private int pageSize;
    private int totalItems;
}
