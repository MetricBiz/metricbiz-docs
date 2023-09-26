using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    [HttpPost("logout")]
    [SwaggerOperation(Summary = "This is used to logout an existing user. This will mark also the token as unusable once called.")]
    [ProducesResponseType(typeof(UserDTO), 200)]
    [ProducesResponseType(typeof(Fault), 400)]
    public IActionResult Logout()
    {
        // Logic to log out the user and invalidate the token
        if (LogoutUser())
        {
            return Ok(new UserDTO { Message = "User logged out successfully" });
        }

        return BadRequest(new Fault { ErrorMessage = "Logout failed" });
    }

    private bool LogoutUser()
    {
        // Implement your logout logic here
        // For demonstration purposes, assume the user is successfully logged out
        return true;
    }
}

public class UserDTO
{
    public string Message { get; set; }
}
