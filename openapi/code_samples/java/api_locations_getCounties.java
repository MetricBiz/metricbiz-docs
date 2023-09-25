import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/location")
public class LocationController {

    @GetMapping("/getAllCounties")
    public ResponseEntity<PageString> getAllCounties(
            @RequestParam(defaultValue = "0") int pageNumber,
            @RequestParam(defaultValue = "50") int pageSize) {
        // Your implementation here to retrieve the list of counties
        // Simulated data for demonstration purposes
        List<String> counties = Arrays.asList("County 1", "County 2", "County 3");

        // Paginate the results
        List<String> paginatedCounties = counties
                .subList(pageNumber * pageSize, Math.min((pageNumber + 1) * pageSize, counties.size()));

        PageString pageString = new PageString();
        pageString.setItems(paginatedCounties);
        pageString.setPageNumber(pageNumber);
        pageString.setPageSize(pageSize);
        pageString.setTotalItems(counties.size());

        return ResponseEntity.ok(pageString);
    }
}

class PageString {
    private List<String> items;
    private int pageNumber;
    private int pageSize;
    private int totalItems;

    // Getters and setters
}
