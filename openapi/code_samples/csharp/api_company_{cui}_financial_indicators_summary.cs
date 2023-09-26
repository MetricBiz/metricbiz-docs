using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

[ApiController]
[Route("api/[controller]")]
public class CompanyController : ControllerBase
{
    [HttpGet]
    [Route("summary/{cui}")]
    [SwaggerOperation(Summary = "Retrieves the summary of a given company CUI.")]
    [ProducesResponseType(typeof(SummaryReportResponseDTO), 200)]
    [ProducesResponseType(typeof(Fault), 400)]
    public IActionResult GetSummary([FromRoute] string cui, [FromQuery(Name = "currency")] string currency = "RON")
    {
        // Your implementation here
        return Ok();
    }
}
