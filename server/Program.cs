using Microsoft.AspNetCore.Server.Kestrel.Core;
using server.Services;

var builder = WebApplication.CreateBuilder(args);

// Additional configuration is required to successfully run gRPC on macOS.
// For instructions on how to configure Kestrel and gRPC clients on macOS, visit https://go.microsoft.com/fwlink/?linkid=2099682
// builder.WebHost.ConfigureKestrel(options =>
// {
//     // Setup a HTTP/2 endpoint without TLS.
//     options.ListenLocalhost(11005, o => o.Protocols = HttpProtocols.Http2);
// });
// builder.WebHost.UseKestrel();

// Add services to the container.
// builder.Services.AddGrpc();
builder.Services.AddTransient<FakeDataGenerator>();
// builder.Services.AddCors(opts =>
// {
//     opts.AddPolicy("AllowOrigin", x =>
//         x.AllowAnyHeader()
//          .AllowAnyMethod()
//          .AllowAnyOrigin()
//     );
//     opts.DefaultPolicyName = "AllowOrigin";
// });

var app = builder.Build();

// Configure the HTTP request pipeline.
// app.MapGrpcService<DataProviderGrpc>().EnableGrpcWeb().;
app.UseRouting();
// app.UseCors("AllowOrigin");
// app.UseHttpsRedirection();


// app.UseGrpcWeb();

app.MapGet("/", () =>
{
    return "Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909";
});

app.Use(async (context, next) =>
{
    Console.WriteLine($"4. Endpoint: {context.GetEndpoint()?.DisplayName ?? "(null)"}");
    await next(context);
});

app.Run();
