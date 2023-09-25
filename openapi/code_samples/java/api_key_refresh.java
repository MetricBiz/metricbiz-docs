import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/apikey")
public class APIKeyController {

    @PostMapping("/refreshApiKey")
    public ResponseEntity<UserRefreshApiKeyResponseDTO> refreshApiKey() {
        // Your implementation here to refresh the API key
        UserRefreshApiKeyResponseDTO apiKeyResponse = new UserRefreshApiKeyResponseDTO();
        apiKeyResponse.setApiKey("refreshed_api_key_here");
        return ResponseEntity.ok(apiKeyResponse);
    }
}

class UserRefreshApiKeyResponseDTO {
    private String apiKey;

    // Getters and setters
}
