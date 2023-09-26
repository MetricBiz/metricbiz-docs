import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @PostMapping("/logout")
    public ResponseEntity<Object> logout() {
        // Logic to log out the user and invalidate the token
        if (logoutUser()) {
            return ResponseEntity.ok(new UserDTO("User logged out successfully"));
        }

        return ResponseEntity.badRequest().body(new Fault("Logout failed"));
    }

    private boolean logoutUser() {
        // Implement your logout logic here
        // For demonstration purposes, assume the user is successfully logged out
        return true;
    }
}

class UserDTO {
    private String message;

    public UserDTO(String message) {
        this.message = message;
    }

    // getter
}
