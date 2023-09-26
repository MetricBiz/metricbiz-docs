import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CompanyController {

    @GetMapping("/api/company/find")
    public ResponseEntity<?> find(
            @RequestParam(name = "pageNo", defaultValue = "0") int pageNo,
            @RequestParam(name = "pageSize", defaultValue = "10") int pageSize,
            @RequestParam(name = "cuiOrName", defaultValue = "") String cuiOrName,
            @RequestParam(name = "sortBy", defaultValue = "name") String sortBy,
            @RequestParam(name = "currency", defaultValue = "RON") String currency) {

        // Your implementation here

        return ResponseEntity.ok().build();
    }
}
