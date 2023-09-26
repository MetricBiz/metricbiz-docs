import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CompanyController {

    @GetMapping("/api/company/top-10-companies-by-caen")
    public ResponseEntity<?> findTop10CompaniesByCaen(
            @RequestParam(name = "caen", defaultValue = "") String caen,
            @RequestParam(name = "year", defaultValue = "0") int year,
            @RequestParam(name = "county", defaultValue = "") String county,
            @RequestParam(name = "pageNumber", defaultValue = "0") int pageNumber,
            @RequestParam(name = "pageSize", defaultValue = "20") int pageSize,
            @RequestParam(name = "sortBy", defaultValue = "caen") String sortBy) {

        // Your implementation here

        return ResponseEntity.ok().build();
    }
}
