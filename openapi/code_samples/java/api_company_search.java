import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CompanyController {

    @GetMapping("/api/company/search")
    public ResponseEntity<?> search(@RequestParam(name = "keyword", defaultValue = "") String keyword) {
        // Your implementation here
        return ResponseEntity.ok().build();
    }
}
