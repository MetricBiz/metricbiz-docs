using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

[ApiController]
[Route("api/[controller]")]
public class CompanyController : ControllerBase
{
    [HttpGet]
    [Route("find")]
    [SwaggerOperation(Summary = "Retrieves companies based on CUI or name in a pageable manner.")]
    [ProducesResponseType(typeof(PageCompanyDetailsResponse), 200)]
    [ProducesResponseType(typeof(Fault), 400)]
    public IActionResult Find(
        [FromQuery(Name = "pageNo")] int pageNo = 0,
        [FromQuery(Name = "pageSize")] int pageSize = 10,
        [FromQuery(Name = "cuiOrName")] string cuiOrName = "",
        [FromQuery(Name = "sortBy")] string sortBy = "name",
        [FromQuery(Name = "currency")] string currency = "RON")
    {
        // Your implementation here
        return Ok();
    }
}
