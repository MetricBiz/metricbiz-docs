using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

[ApiController]
[Route("api/[controller]")]
public class CompanyController : ControllerBase
{
    [HttpGet]
    [Route("bankrupt-companies-active-years")]
    [SwaggerOperation(Summary = "Retrieves the active years of bankrupt companies.")]
    [ProducesResponseType(typeof(PageBankruptCompaniesActiveYearsView), 200)]
    [ProducesResponseType(typeof(Fault), 400)]
    public IActionResult GetBankruptCompaniesActiveYears(
        [FromQuery(Name = "activityYears")] int activityYears = 3,
        [FromQuery(Name = "caen")] string caen = "",
        [FromQuery(Name = "cui")] string cui = "",
        [FromQuery(Name = "county")] string county = "",
        [FromQuery(Name = "pageNumber")] int pageNumber = 0,
        [FromQuery(Name = "pageSize")] int pageSize = 20,
        [FromQuery(Name = "sortBy")] string sortBy = "cui")
    {
        // Your implementation here
        return Ok();
    }
}
