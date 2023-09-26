using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    [HttpPost]
    [Route("login")]
    [SwaggerOperation(Summary = "This is used to authenticate a user.")]
    [ProducesResponseType(typeof(object), 200)]
    [ProducesResponseType(typeof(Fault), 400)]
    public IActionResult Login([FromBody] LoginUser loginUser)
    {
        // Your authentication logic here
        // Simulated authentication for demonstration purposes
        if (loginUser.Username == "sampleuser" && loginUser.Password == "password123")
        {
            var userToken = new { Token = "sampleAuthToken" };
            return Ok(userToken);
        }

        return BadRequest(new Fault { ErrorMessage = "Invalid username or password." });
    }
}

public class LoginUser
{
    public string Username { get; set; }
    public string Password { get; set; }
}
