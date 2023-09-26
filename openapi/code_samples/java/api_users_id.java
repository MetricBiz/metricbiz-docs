import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    // Simulated user data for demonstration purposes
    private final List<User> users = Arrays.asList(
            new User(1, "sampleuser1"),
            new User(2, "sampleuser2"),
            new User(3, "sampleuser3")
    );

    @GetMapping("/{userId}")
    public ResponseEntity<Object> findUserById(@PathVariable int userId) {
        User user = users.stream().filter(u -> u.getId() == userId).findFirst().orElse(null);
        if (user != null) {
            return ResponseEntity.ok(user);
        }

        return ResponseEntity.badRequest().body(new Fault("User not found."));
    }
}

class User {
    private int id;
    private String username;

    public User(int id, String username) {
        this.id = id;
        this.username = username;
    }

    // getters and setters
}
