using API.Errors;
using API.Extensions;
using API.Middleware;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
//Implements the applications services from the extensions folder
builder.Services.AddApplicationServices(builder.Configuration);

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseMiddleware<ExceptionMiddleware>();


app.UseStatusCodePagesWithReExecute("/errors/{0}");
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//Serve static files
app.UseStaticFiles();

app.UseAuthorization();

app.MapControllers();

// USing keyword makes sure that the service is disposed of at end of scope
using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;
var context = services.GetRequiredService<StoreContext>();
var logger = services.GetRequiredService<ILogger<Program>>();

try
{
    await context.Database.MigrateAsync();
    await StoreContextSeed.SeedAsync(context);
}
catch (Exception ex)
{
    logger.LogError(ex , "An error occuraed while migrating database");
}

app.Run();
