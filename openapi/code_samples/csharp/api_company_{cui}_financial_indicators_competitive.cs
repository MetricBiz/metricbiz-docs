using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

[ApiController]
[Route("api/[controller]")]
public class CompanyController : ControllerBase
{
    [HttpGet]
    [Route("competitive/{cui}")]
    [SwaggerOperation(Summary = "Retrieves the competitive indicators of a given company CUI.")]
    [ProducesResponseType(typeof(CompetitiveReportResponseDTO), 200)]
    [ProducesResponseType(typeof(Fault), 400)]
    public IActionResult GetCompetitive([FromRoute] string cui, [FromQuery(Name = "currency")] string currency = "RON")
    {
        // Your implementation here
        return Ok();
    }
}
