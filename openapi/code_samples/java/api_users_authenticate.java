import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody LoginUser loginUser) {
        // Your authentication logic here
        // Simulated authentication for demonstration purposes
        if (loginUser.getUsername().equals("sampleuser") && loginUser.getPassword().equals("password123")) {
            return ResponseEntity.ok(new UserToken("sampleAuthToken"));
        }

        return ResponseEntity.badRequest().body(new Fault("Invalid username or password."));
    }
}
