using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

[ApiController]
[Route("api/[controller]")]
public class CompanyController : ControllerBase
{
    [HttpGet]
    [Route("search")]
    [SwaggerOperation(Summary = "Retrieves the top 10 companies based on CUI or name as the keyword.")]
    [ProducesResponseType(typeof(SearchCompanyResponse[]), 200)]
    [ProducesResponseType(typeof(Fault), 400)]
    public IActionResult Search([FromQuery(Name = "keyword")] string keyword = "")
    {
        // Your implementation here
        return Ok();
    }
}
