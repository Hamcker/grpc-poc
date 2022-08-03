using System.Diagnostics;
using Contracts;
using Microsoft.AspNetCore.Mvc;
using server.Services;

namespace server_webapi.Controllers;

[ApiController]
[Route("[controller]")]
public class GenerateDataController : ControllerBase
{
    private readonly FakeDataGenerator _fakeDataGenerator;

    public GenerateDataController(FakeDataGenerator generator)
    {
        _fakeDataGenerator = generator;
    }

    [HttpPost("GenerateData1")]
    public IActionResult GenerateData1(GenerateDataRequest1 request)
    {
        var timer = new Stopwatch();
        var timestamps = new List<string>();
        timer.Start();

        var fakeData = _fakeDataGenerator.Generate<ActualData1>(request.RequiredCount, timer);
        timestamps.Add(fakeData.ElapsedTime.ToString());

        var outlet = new GenerateDataResponse1 { TotalRows = request.RequiredCount, };

        outlet.Data.AddRange(fakeData.Data);
        outlet.Timestamps.AddRange(timestamps);

        return Ok(outlet);
    }

    [HttpPost("GenerateData2")]
    public IActionResult GenerateData2(GenerateDataRequest2 request)
    {
        var timer = new Stopwatch();
        var timestamps = new List<string>();
        timer.Start();

        var fakeData = _fakeDataGenerator.Generate<ActualData2>(request.RequiredCount, timer);
        timestamps.Add(fakeData.ElapsedTime.ToString());

        var outlet = new GenerateDataResponse2 { TotalRows = request.RequiredCount, };

        outlet.Data.AddRange(fakeData.Data);
        outlet.Timestamps.AddRange(timestamps);

        return Ok(outlet);
    }

    [HttpPost("GenerateData3")]
    public IActionResult GenerateData3(GenerateDataRequest3 request)
    {
        var timer = new Stopwatch();
        var timestamps = new List<string>();
        timer.Start();

        var fakeData = _fakeDataGenerator.Generate<ActualData3>(request.RequiredCount, timer);
        timestamps.Add(fakeData.ElapsedTime.ToString());

        var outlet = new GenerateDataResponse3 { TotalRows = request.RequiredCount, };

        outlet.Data.AddRange(fakeData.Data);
        outlet.Timestamps.AddRange(timestamps);

        return Ok(outlet);
    }

    [HttpPost("GenerateData40")]
    public IActionResult GenerateData40(GenerateDataRequest4 request)
    {
        var timer = new Stopwatch();
        var timestamps = new List<string>();
        timer.Start();

        var fakeData = _fakeDataGenerator.Generate<ActualData4>(request.RequiredCount, timer);
        timestamps.Add(fakeData.ElapsedTime.ToString());

        var outlet = new GenerateDataResponse4 { TotalRows = request.RequiredCount, };

        outlet.Data.AddRange(fakeData.Data);
        outlet.Timestamps.AddRange(timestamps);

        return Ok(outlet);
    }
}
