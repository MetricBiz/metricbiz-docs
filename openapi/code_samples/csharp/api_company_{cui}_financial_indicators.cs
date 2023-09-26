using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

[ApiController]
[Route("api/[controller]")]
public class CompanyController : ControllerBase
{
    [HttpGet]
    [Route("list-indicators/{cui}")]
    [SwaggerOperation(Summary = "Retrieves the list of financial indicators for a given company CUI.")]
    [ProducesResponseType(typeof(FinancialIndicatorResponseDTO), 200)]
    [ProducesResponseType(typeof(Fault), 400)]
    public IActionResult ListIndicators([FromRoute] string cui, [FromQuery(Name = "currency")] string currency = "RON")
    {
        // Your implementation here
        return Ok();
    }
}
