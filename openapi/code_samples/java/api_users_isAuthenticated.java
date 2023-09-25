import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @GetMapping("/userPing")
    public ResponseEntity<Object> userPing() {
        // Logic to check if the user is authenticated
        if (userIsAuthenticated()) {
            return ResponseEntity.ok(new UserAuthDTO(true));
        }

        return ResponseEntity.badRequest().body(new Fault("User is not authenticated."));
    }

    private boolean userIsAuthenticated() {
        // Implement your authentication logic here
        // For demonstration purposes, assume the user is authenticated
        return true;
    }
}

class UserAuthDTO {
    private boolean authenticated;

    public UserAuthDTO(boolean authenticated) {
        this.authenticated = authenticated;
    }

    // getter
}
