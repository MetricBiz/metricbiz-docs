import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/currency")
public class CurrencyController {

    @GetMapping("/currencies")
    public ResponseEntity<List<String>> getAllCurrencies() {
        List<String> supportedCurrencies = Arrays.asList("USD", "EUR", "GBP", "JPY");
        // Add more currencies here
        return ResponseEntity.ok(supportedCurrencies);
    }
}
