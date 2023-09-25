using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    [HttpGet("userPing")]
    [SwaggerOperation(Summary = "Checks if the token is still usable or if the user is authenticated.")]
    [ProducesResponseType(typeof(UserAuthDTO), 200)]
    [ProducesResponseType(typeof(Fault), 400)]
    public IActionResult UserPing()
    {
        // Logic to check if the user is authenticated
        if (UserIsAuthenticated())
        {
            return Ok(new UserAuthDTO { Authenticated = true });
        }

        return BadRequest(new Fault { ErrorMessage = "User is not authenticated." });
    }

    private bool UserIsAuthenticated()
    {
        // Implement your authentication logic here
        // For demonstration purposes, assume the user is authenticated
        return true;
    }
}

public class UserAuthDTO
{
    public bool Authenticated { get; set; }
}
