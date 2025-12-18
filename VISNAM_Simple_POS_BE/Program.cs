using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
using VISNAM_Simple_POS_BE.Hubs;
using VISNAM_Simple_POS_BE.Services.Implements;
using VISNAM_Simple_POS_BE.Services.Interfaces;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo() { Title = "VISNAM - Simple POS System", Version = "v1" });
    options.MapType<TimeOnly>(() => new OpenApiSchema
    {
        Type = "string",
        Format = "time",
        Example = OpenApiAnyFactory.CreateFromJson("\"13:45:42.0000000\"")
    });
});

builder.Services.AddScoped<IProductService, IProductServiceImp>();
builder.Services.AddScoped<IOrderService, IOrderServiceImp>();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "AllowReactApp",
        policy => { policy.WithOrigins("http://localhost:5173", "https://localhost:5173")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials(); });
});

builder.Logging.AddConsole();
builder.Logging.AddDebug();
builder.Services.AddAutoMapper(typeof(Program).Assembly);

builder.Services.AddSignalR();


var app = builder.Build();

app.UseRouting();

app.UseCors("AllowReactApp");

app.UseSwagger();
app.UseSwaggerUI();

app.UseAuthorization();

app.MapControllers();

app.MapHub<SystemHub>("api/v1/hubs/orders");



app.Run();
