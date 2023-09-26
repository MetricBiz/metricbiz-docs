import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/location")
public class LocationController {

    @GetMapping("/findByPostalCode/{postalCode}")
    public ResponseEntity<List<CityModel>> findByPostalCode(@PathVariable String postalCode) {
        // Your implementation here to retrieve city details by postal code
        // Simulated data for demonstration purposes
        List<CityModel> cities = Arrays.asList(
                new CityModel("City 1", postalCode),
                new CityModel("City 2", postalCode),
                new CityModel("City 3", postalCode)
        );

        return ResponseEntity.ok(cities);
    }
}

@Data
@AllArgsConstructor
class CityModel {
    private String name;
    private String postalCode;
}
