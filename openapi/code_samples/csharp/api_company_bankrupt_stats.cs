using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

[ApiController]
[Route("api/[controller]")]
public class CompanyController : ControllerBase
{
    [HttpGet]
    [Route("top-10-companies-by-caen")]
    [SwaggerOperation(Summary = "Retrieves the top 10 bankrupt company stats based on a specific CAEN.")]
    [ProducesResponseType(typeof(PageBankruptCompanyStatsView), 200)]
    [ProducesResponseType(typeof(Fault), 400)]
    public IActionResult FindTop10CompaniesByCaen(
        [FromQuery(Name = "caen")] string caen = "",
        [FromQuery(Name = "year")] int year = 0,
        [FromQuery(Name = "county")] string county = "",
        [FromQuery(Name = "pageNumber")] int pageNumber = 0,
        [FromQuery(Name = "pageSize")] int pageSize = 20,
        [FromQuery(Name = "sortBy")] string sortBy = "caen")
    {
        // Your implementation here
        return Ok();
    }
}
