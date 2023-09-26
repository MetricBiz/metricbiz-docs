import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/company")
public class CompanyController {

    @GetMapping("/top-10-companies/{caen}")
    public ResponseEntity<?> getTop10CompaniesByCaen(@PathVariable String caen) {
        // Your implementation here
        return ResponseEntity.ok().build();
    }
}
