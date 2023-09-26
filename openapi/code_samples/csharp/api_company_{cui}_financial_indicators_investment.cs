using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

[ApiController]
[Route("api/[controller]")]
public class CompanyController : ControllerBase
{
    [HttpGet]
    [Route("investment/{cui}")]
    [SwaggerOperation(Summary = "Retrieves the investment of a given company CUI.")]
    [ProducesResponseType(typeof(InvestmentReportResponseDTO), 200)]
    [ProducesResponseType(typeof(Fault), 400)]
    public IActionResult GetInvestment([FromRoute] string cui, [FromQuery(Name = "currency")] string currency = "RON")
    {
        // Your implementation here
        return Ok();
    }
}
