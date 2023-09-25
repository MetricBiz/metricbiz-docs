import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/company")
public class CompanyController {

    @GetMapping("/sector-average/{caen}")
    public ResponseEntity<?> getSectorAverageByCaen(@PathVariable String caen) {
        // Your implementation here
        return ResponseEntity.ok().build();
    }
}
