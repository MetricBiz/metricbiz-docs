using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using System.Collections.Generic;

[ApiController]
[Route("api/[controller]")]
public class CurrencyController : ControllerBase
{
    [HttpGet]
    [Route("currencies")]
    [SwaggerOperation(Summary = "Retrieves the list of supported currencies.")]
    [ProducesResponseType(typeof(List<string>), 200)]
    [ProducesResponseType(typeof(Fault), 400)]
    public IActionResult GetAllCurrencies()
    {
        List<string> supportedCurrencies = new List<string>
        {
            "USD",
            "EUR",
            "GBP",
            "JPY",
            // Add more currencies here
        };

        return Ok(supportedCurrencies);
    }
}
