using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using System.Collections.Generic;

[ApiController]
[Route("api/[controller]")]
public class CompanyController : ControllerBase
{
    [HttpGet]
    [Route("risk/{cui}")]
    [SwaggerOperation(Summary = "Compute the risk of a given company CUI.")]
    [ProducesResponseType(typeof(List<RiskScore>), 200)]
    [ProducesResponseType(typeof(Fault), 400)]
    public IActionResult GetCompanyRisk([FromRoute] string cui, [FromQuery(Name = "currency")] string currency = "RON")
    {
        // Your implementation here to compute the risk
        List<RiskScore> riskScores = new List<RiskScore>
        {
            new RiskScore { Score = 75, Category = "Moderate" },
            new RiskScore { Score = 60, Category = "Low" }
        };

        return Ok(riskScores);
    }
}

public class RiskScore
{
    public int Score { get; set; }
    public string Category { get; set; }
}
