using System.Diagnostics;
using Contracts;
using Grpc.Core;
using Microsoft.Extensions.Logging;

namespace server.Services;

public class DataProviderGrpc : DataProvider.DataProviderBase
{
    private readonly ILogger<DataProviderGrpc> _logger;
    private readonly FakeDataGenerator _fakeDataGenerator;

    public DataProviderGrpc(ILogger<DataProviderGrpc> logger, FakeDataGenerator fakeDataGenerator)
    {
        _logger = logger;
        _fakeDataGenerator = fakeDataGenerator;
    }

    

    public override Task<GenerateDataResponse1> GenerateData1(GenerateDataRequest1 request, ServerCallContext context)
    {
        var timer = new Stopwatch();
        var timestamps = new List<string>();
        timer.Start();

        var fakeData = _fakeDataGenerator.Generate<ActualData1>(request.RequiredCount, timer);
        timestamps.Add(fakeData.ElapsedTime.ToString());

        var outlet = new GenerateDataResponse1
        {
            TotalRows = request.RequiredCount,
        };

        outlet.Data.AddRange(fakeData.Data);
        outlet.Timestamps.AddRange(timestamps);

        return Task.FromResult(outlet);
    }

    public override Task<GenerateDataResponse2> GenerateData2(GenerateDataRequest2 request, ServerCallContext context)
    {
        var timer = new Stopwatch();
        var timestamps = new List<string>();
        timer.Start();

        var fakeData = _fakeDataGenerator.Generate<ActualData2>(request.RequiredCount, timer);
        timestamps.Add(fakeData.ElapsedTime.ToString());

        var outlet = new GenerateDataResponse2
        {
            TotalRows = request.RequiredCount,
        };

        outlet.Data.AddRange(fakeData.Data);
        outlet.Timestamps.AddRange(timestamps);

        return Task.FromResult(outlet);
    }

    public override Task<GenerateDataResponse3> GenerateData3(GenerateDataRequest3 request, ServerCallContext context)
    {
        var timer = new Stopwatch();
        var timestamps = new List<string>();
        timer.Start();

        var fakeData = _fakeDataGenerator.Generate<ActualData3>(request.RequiredCount, timer);
        timestamps.Add(fakeData.ElapsedTime.ToString());

        var outlet = new GenerateDataResponse3
        {
            TotalRows = request.RequiredCount,
        };

        outlet.Data.AddRange(fakeData.Data);
        outlet.Timestamps.AddRange(timestamps);

        return Task.FromResult(outlet);
    }

    public override Task<GenerateDataResponse4> GenerateData4(GenerateDataRequest4 request, ServerCallContext context)
    {
        var timer = new Stopwatch();
        var timestamps = new List<string>();
        timer.Start();

        var fakeData = _fakeDataGenerator.Generate<ActualData4>(request.RequiredCount, timer);
        timestamps.Add(fakeData.ElapsedTime.ToString());

        var outlet = new GenerateDataResponse4
        {
            TotalRows = request.RequiredCount,
        };

        outlet.Data.AddRange(fakeData.Data);
        outlet.Timestamps.AddRange(timestamps);

        return Task.FromResult(outlet);
    }
}
