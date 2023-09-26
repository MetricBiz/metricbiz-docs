import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/company")
public class CompanyController {

    @GetMapping("/risk/{cui}")
    public ResponseEntity<List<RiskScore>> getCompanyRisk(
            @PathVariable String cui,
            @RequestParam(name = "currency", defaultValue = "RON") String currency) {
        // Your implementation here to compute the risk
        List<RiskScore> riskScores = new ArrayList<>();
        riskScores.add(new RiskScore(75, "Moderate"));
        riskScores.add(new RiskScore(60, "Low"));
        return ResponseEntity.ok(riskScores);
    }
}

class RiskScore {
    private int score;
    private String category;

    public RiskScore(int score, String category) {
        this.score = score;
        this.category = category;
    }

    // Getters and setters
}
