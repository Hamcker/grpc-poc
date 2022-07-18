using Microsoft.AspNetCore.Server.Kestrel.Core;
using server.Services;

var builder = WebApplication.CreateBuilder(args);

// Additional configuration is required to successfully run gRPC on macOS.
// For instructions on how to configure Kestrel and gRPC clients on macOS, visit https://go.microsoft.com/fwlink/?linkid=2099682
// builder.WebHost.ConfigureKestrel(options =>
// {
//     // Setup a HTTP/2 endpoint without TLS.
//     options.ListenLocalhost(5097, o => o.Protocols = HttpProtocols.Http2);
// });

// Add services to the container.
builder.Services.AddGrpc();
builder.Services.AddSingleton<FakeDataGenerator>();
builder.Services.AddCors((opts) => {
    opts.AddPolicy("AllowAll", x => x
        .AllowAnyHeader()
        .AllowAnyMethod()
        .AllowAnyOrigin()
        .WithExposedHeaders("Grpc-Status", "Grpc-Message", "Grpc-Encoding", "Grpc-Accept-Encoding")
    );

    opts.AddDefaultPolicy(x => x
        .AllowAnyHeader()
        .AllowAnyMethod()
        .AllowAnyOrigin()
        .WithExposedHeaders("Grpc-Status", "Grpc-Message", "Grpc-Encoding", "Grpc-Accept-Encoding")
    );
});

var app = builder.Build();

app.UseCors("AllowAll");

app.UseGrpcWeb(new GrpcWebOptions{DefaultEnabled= true});
// Configure the HTTP request pipeline.
app.MapGrpcService<DataProviderGrpc>().EnableGrpcWeb().RequireCors("AllowAll");
app.MapGet("/", () => "Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");

app.Run();
