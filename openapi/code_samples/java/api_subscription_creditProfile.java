import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/subscription")
public class SubscriptionController {

    @GetMapping("/getActiveSubscriptionForUser")
    public ResponseEntity<UserSubscriptionResponse> getActiveSubscriptionForUser() {
        // Your implementation here to retrieve the user's active subscription
        // Simulated data for demonstration purposes
        UserSubscriptionResponse userSubscription = new UserSubscriptionResponse("123", "456", 10);

        return ResponseEntity.ok(userSubscription);
    }
}

@Data
@AllArgsConstructor
class UserSubscriptionResponse {
    private String userId;
    private String subscriptionId;
    private int creditsRemaining;
}
