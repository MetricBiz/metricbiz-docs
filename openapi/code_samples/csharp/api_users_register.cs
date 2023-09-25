using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    [HttpPost("saveUser")]
    [SwaggerOperation(Summary = "This is used to register a new user to the MetricBiz Platform.")]
    [ProducesResponseType(typeof(User), 200)]
    [ProducesResponseType(typeof(Fault), 400)]
    public IActionResult SaveUser([FromBody] UserDTO userDto)
    {
        // Logic to save the user (registration)
        if (SaveNewUser(userDto))
        {
            return Ok(new User { UserId = 123, Username = userDto.Username, Email = userDto.Email });
        }

        return BadRequest(new Fault { ErrorMessage = "User registration failed" });
    }

    private bool SaveNewUser(UserDTO userDto)
    {
        // Implement your user registration logic here
        // For demonstration purposes, assume the user is successfully registered
        return true;
    }
}

public class User
{
    public int UserId { get; set; }
    public string Username { get; set; }
    public string Email { get; set; }
}

public class UserDTO
{
    public string Username { get; set; }
    public string Email { get; set; }
    // Add more properties as needed
}
