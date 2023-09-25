using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

[ApiController]
[Route("api/[controller]")]
public class LocationController : ControllerBase
{
    [HttpGet]
    [Route("getAllCitiesByCounty/{county}")]
    [SwaggerOperation(Summary = "Retrieves the list of all locations inside a city.")]
    [ProducesResponseType(typeof(PageCityDetailsModel), 200)]
    [ProducesResponseType(typeof(Fault), 400)]
    public IActionResult GetAllCitiesByCounty(string county, int pageNumber = 0, int pageSize = 50)
    {
        // Your implementation here to retrieve the list of cities for the given county
        // Simulated data for demonstration purposes
        var cities = new List<CityDetailsModel>
        {
            new CityDetailsModel { CityName = "City 1" },
            new CityDetailsModel { CityName = "City 2" },
            new CityDetailsModel { CityName = "City 3" }
            // Add more cities as needed
        };

        // Filter cities by the specified county
        var citiesInCounty = cities.Where(city => city.CountyName == county).ToList();

        // Paginate the results
        var paginatedCities = citiesInCounty.Skip(pageNumber * pageSize).Take(pageSize).ToList();

        PageCityDetailsModel pageCityDetails = new PageCityDetailsModel
        {
            Items = paginatedCities,
            PageNumber = pageNumber,
            PageSize = pageSize,
            TotalItems = citiesInCounty.Count
        };

        return Ok(pageCityDetails);
    }
}

public class CityDetailsModel
{
    public string CityName { get; set; }
    public string CountyName { get; set; }
}

public class PageCityDetailsModel
{
    public List<CityDetailsModel> Items { get; set; }
    public int PageNumber { get; set; }
    public int PageSize { get; set; }
    public int TotalItems { get; set; }
}
