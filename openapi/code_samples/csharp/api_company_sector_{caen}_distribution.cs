using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

[ApiController]
[Route("api/[controller]")]
public class CompanyController : ControllerBase
{
    [HttpGet]
    [Route("sector-distribution/{caen}")]
    [SwaggerOperation(Summary = "Retrieves the company distribution on a given sector CAEN.")]
    [ProducesResponseType(typeof(SectorDistributionByFiscalValueView[]), 200)]
    [ProducesResponseType(typeof(Fault), 400)]
    public IActionResult GetSectorDistributionByCaen([FromRoute] string caen)
    {
        // Your implementation here
        return Ok();
    }
}
