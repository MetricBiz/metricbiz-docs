using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    // Simulated user data for demonstration purposes
    private readonly List<User> _users = new List<User>
    {
        new User { Id = 1, Username = "sampleuser1" },
        new User { Id = 2, Username = "sampleuser2" },
        new User { Id = 3, Username = "sampleuser3" }
    };

    [HttpGet("{userId}")]
    [SwaggerOperation(Summary = "Retrieves user details based on the token.")]
    [ProducesResponseType(typeof(User), 200)]
    [ProducesResponseType(typeof(Fault), 400)]
    public IActionResult FindUserById(int userId)
    {
        var user = _users.FirstOrDefault(u => u.Id == userId);
        if (user != null)
        {
            return Ok(user);
        }

        return BadRequest(new Fault { ErrorMessage = "User not found." });
    }
}

public class User
{
    public int Id { get; set; }
    public string Username { get; set; }
}
