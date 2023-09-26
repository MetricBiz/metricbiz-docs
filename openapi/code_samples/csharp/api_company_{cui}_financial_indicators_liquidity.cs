using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

[ApiController]
[Route("api/[controller]")]
public class CompanyController : ControllerBase
{
    [HttpGet]
    [Route("liquidity/{cui}")]
    [SwaggerOperation(Summary = "Retrieves the liquidity of a given company CUI.")]
    [ProducesResponseType(typeof(LiquidityReportResponseDTO), 200)]
    [ProducesResponseType(typeof(Fault), 400)]
    public IActionResult GetLiquidity([FromRoute] string cui, [FromQuery(Name = "currency")] string currency = "RON")
    {
        // Your implementation here
        return Ok();
    }
}
