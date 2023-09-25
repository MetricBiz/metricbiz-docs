import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/company")
public class CompanyController {

    @GetMapping("/list-indicators/{cui}")
    public ResponseEntity<?> listIndicators(
            @PathVariable String cui,
            @RequestParam(name = "currency", defaultValue = "RON") String currency) {
        // Your implementation here
        return ResponseEntity.ok().build();
    }
}
