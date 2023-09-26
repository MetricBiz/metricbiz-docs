using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

[ApiController]
[Route("api/[controller]")]
public class CompanyController : ControllerBase
{
    [HttpGet]
    [Route("top-10-companies/{caen}")]
    [SwaggerOperation(Summary = "Retrieves the top 10 companies on a given sector CAEN.")]
    [ProducesResponseType(typeof(TopCompaniesByFiscalValueView[]), 200)]
    [ProducesResponseType(typeof(Fault), 400)]
    public IActionResult GetTop10CompaniesByCaen([FromRoute] string caen)
    {
        // Your implementation here
        return Ok();
    }
}
