using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

[ApiController]
[Route("api/[controller]")]
public class CompanyController : ControllerBase
{
    [HttpGet]
    [Route("activity-finance/{cui}")]
    [SwaggerOperation(Summary = "Retrieves the finance activity of a given company CUI.")]
    [ProducesResponseType(typeof(FinanceActivityReportResponseDTO), 200)]
    [ProducesResponseType(typeof(Fault), 400)]
    public IActionResult GetActivityFinance([FromRoute] string cui, [FromQuery(Name = "currency")] string currency = "RON")
    {
        // Your implementation here
        return Ok();
    }
}
