using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

[ApiController]
[Route("api/[controller]")]
public class SubscriptionController : ControllerBase
{
    [HttpGet]
    [Route("getActiveSubscriptionForUser")]
    [SwaggerOperation(Summary = "Checks the number of credit that the user can still use.")]
    [ProducesResponseType(typeof(UserSubscriptionResponse), 200)]
    [ProducesResponseType(typeof(Fault), 400)]
    public IActionResult GetActiveSubscriptionForUser()
    {
        // Your implementation here to retrieve the user's active subscription
        // Simulated data for demonstration purposes
        var userSubscription = new UserSubscriptionResponse
        {
            UserId = "123",
            SubscriptionId = "456",
            CreditsRemaining = 10
        };

        return Ok(userSubscription);
    }
}

public class UserSubscriptionResponse
{
    public string UserId { get; set; }
    public string SubscriptionId { get; set; }
    public int CreditsRemaining { get; set; }
}
