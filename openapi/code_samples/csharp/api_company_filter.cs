using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

[ApiController]
[Route("api/[controller]")]
public class CompanyController : ControllerBase
{
    [HttpGet]
    [Route("list-indicators")]
    [SwaggerOperation(Summary = "Filters companies based on various indicators.")]
    [ProducesResponseType(typeof(SearchCompanyResponse[]), 200)]
    [ProducesResponseType(typeof(Fault), 400)]
    public IActionResult ListIndicators([FromQuery] CompanyFilterCriteria companyFilterCriteria)
    {
        // Your implementation here
        return Ok();
    }
}
