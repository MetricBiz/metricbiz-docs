import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @PostMapping("/saveUser")
    public ResponseEntity<Object> saveUser(@RequestBody UserDTO userDto) {
        // Logic to save the user (registration)
        if (saveNewUser(userDto)) {
            User user = new User(123, userDto.getUsername(), userDto.getEmail());
            return ResponseEntity.ok(user);
        }

        return ResponseEntity.badRequest().body(new Fault("User registration failed"));
    }

    private boolean saveNewUser(UserDTO userDto) {
        // Implement your user registration logic here
        // For demonstration purposes, assume the user is successfully registered
        return true;
    }
}

class User {
    private int userId;
    private String username;
    private String email;

    public User(int userId, String username, String email) {
        this.userId = userId;
        this.username = username;
        this.email = email;
    }

    // getters
}

class UserDTO {
    private String username;
    private String email;
    // Add more properties as needed
    // getters and setters
}
