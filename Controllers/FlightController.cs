using Microsoft.AspNetCore.Mvc;

namespace Flights.Controllers;

[ApiController]
[Route("[controller]")]
public class FlightController : ControllerBase
{
    private readonly ILogger<FlightController> _logger;

    public FlightController(ILogger<FlightController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<string> Search()
        => new string[]{
            "American Airlines",
            "Lan",
            "Brithish Airline"
        };

}
