import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CompanyController {

    @GetMapping("/api/company/bankrupt-companies-active-years")
    public ResponseEntity<?> getBankruptCompaniesActiveYears(
            @RequestParam(name = "activityYears", defaultValue = "3") int activityYears,
            @RequestParam(name = "caen", defaultValue = "") String caen,
            @RequestParam(name = "cui", defaultValue = "") String cui,
            @RequestParam(name = "county", defaultValue = "") String county,
            @RequestParam(name = "pageNumber", defaultValue = "0") int pageNumber,
            @RequestParam(name = "pageSize", defaultValue = "20") int pageSize,
            @RequestParam(name = "sortBy", defaultValue = "cui") String sortBy) {

        // Your implementation here

        return ResponseEntity.ok().build();
    }
}
