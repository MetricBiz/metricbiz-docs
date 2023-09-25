using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

[ApiController]
[Route("api/[controller]")]
public class CompanyController : ControllerBase
{
    [HttpGet]
    [Route("sector-average/{caen}")]
    [SwaggerOperation(Summary = "Retrieves the company average sector on a given CAEN.")]
    [ProducesResponseType(typeof(SectorAverageView[]), 200)]
    [ProducesResponseType(typeof(Fault), 400)]
    public IActionResult GetSectorAverageByCaen([FromRoute] string caen)
    {
        // Your implementation here
        return Ok();
    }
}
