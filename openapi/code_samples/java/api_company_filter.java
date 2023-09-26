import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CompanyController {

    @GetMapping("/api/company/list-indicators")
    public ResponseEntity<?> listIndicators(@RequestParam CompanyFilterCriteria companyFilterCriteria) {
        // Your implementation here
        return ResponseEntity.ok().build();
    }
}
