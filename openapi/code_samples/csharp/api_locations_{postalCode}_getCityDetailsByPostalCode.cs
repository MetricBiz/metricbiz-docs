using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using System.Collections.Generic;

[ApiController]
[Route("api/[controller]")]
public class LocationController : ControllerBase
{
    [HttpGet]
    [Route("findByPostalCode/{postalCode}")]
    [SwaggerOperation(Summary = "Retrieves the city details by postal code.")]
    [ProducesResponseType(typeof(List<CityModel>), 200)]
    [ProducesResponseType(typeof(Fault), 400)]
    public IActionResult FindByPostalCode(string postalCode)
    {
        // Your implementation here to retrieve city details by postal code
        // Simulated data for demonstration purposes
        var cities = new List<CityModel>
        {
            new CityModel { Name = "City 1", PostalCode = postalCode },
            new CityModel { Name = "City 2", PostalCode = postalCode },
            new CityModel { Name = "City 3", PostalCode = postalCode }
        };

        return Ok(cities);
    }
}

public class CityModel
{
    public string Name { get; set; }
    public string PostalCode { get; set; }
}
