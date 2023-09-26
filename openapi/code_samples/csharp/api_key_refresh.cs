using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

[ApiController]
[Route("api/[controller]")]
public class APIKeyController : ControllerBase
{
    [HttpPost]
    [Route("refreshApiKey")]
    [SwaggerOperation(Summary = "Refreshes the API key.")]
    [ProducesResponseType(typeof(UserRefreshApiKeyResponseDTO), 200)]
    [ProducesResponseType(typeof(Fault), 400)]
    public IActionResult RefreshApiKey()
    {
        // Your implementation here to refresh the API key
        UserRefreshApiKeyResponseDTO apiKeyResponse = new UserRefreshApiKeyResponseDTO
        {
            ApiKey = "refreshed_api_key_here"
        };

        return Ok(apiKeyResponse);
    }
}

public class UserRefreshApiKeyResponseDTO
{
    public string ApiKey { get; set; }
}
