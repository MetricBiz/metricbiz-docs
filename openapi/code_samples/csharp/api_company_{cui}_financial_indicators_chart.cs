using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

[ApiController]
[Route("api/[controller]")]
public class CompanyController : ControllerBase
{
    [HttpGet]
    [Route("indicators-chart/{cui}")]
    [SwaggerOperation(Summary = "Retrieves the financial indicators in a chart view of a given company CUI.")]
    [ProducesResponseType(typeof(FinancialIndicatorChartResponseDTO), 200)]
    [ProducesResponseType(typeof(Fault), 400)]
    public IActionResult ListIndicatorsAsChart([FromRoute] string cui, [FromQuery(Name = "currency")] string currency = "RON")
    {
        // Your implementation here
        return Ok();
    }
}
