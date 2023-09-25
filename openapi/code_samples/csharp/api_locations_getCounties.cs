using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

[ApiController]
[Route("api/[controller]")]
public class LocationController : ControllerBase
{
    [HttpGet]
    [Route("getAllCounties")]
    [SwaggerOperation(Summary = "Retrieves the list of counties in a pageable manner.")]
    [ProducesResponseType(typeof(PageString), 200)]
    [ProducesResponseType(typeof(Fault), 400)]
    public IActionResult GetAllCounties(int pageNumber = 0, int pageSize = 50)
    {
        // Your implementation here to retrieve the list of counties
        // Simulated data for demonstration purposes
        var counties = new List<string>
        {
            "County 1",
            "County 2",
            "County 3"
            // Add more counties as needed
        };

        // Paginate the results
        var paginatedCounties = counties.Skip(pageNumber * pageSize).Take(pageSize).ToList();

        PageString pageString = new PageString
        {
            Items = paginatedCounties,
            PageNumber = pageNumber,
            PageSize = pageSize,
            TotalItems = counties.Count
        };

        return Ok(pageString);
    }
}

public class PageString
{
    public List<string> Items { get; set; }
    public int PageNumber { get; set; }
    public int PageSize { get; set; }
    public int TotalItems { get; set; }
}
