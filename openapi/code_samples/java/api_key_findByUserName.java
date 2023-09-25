import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/apikey")
public class APIKeyController {

    @GetMapping("/apiKey")
    public ResponseEntity<UserRefreshApiKeyResponseDTO> getApiKey() {
        // Your implementation here to retrieve the API key
        UserRefreshApiKeyResponseDTO apiKeyResponse = new UserRefreshApiKeyResponseDTO();
        apiKeyResponse.setApiKey("your_api_key_here");
        return ResponseEntity.ok(apiKeyResponse);
    }
}

class UserRefreshApiKeyResponseDTO {
    private String apiKey;

    // Getters and setters
}
