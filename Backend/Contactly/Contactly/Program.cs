using Contactly.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Injecting Db context
var connectionString = builder.Configuration.GetConnectionString("Contactly");
builder.Services.AddDbContext<ContactlyDbContext>(options =>
    options.UseSqlServer(connectionString));


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(
    policy => policy
        .WithOrigins("http://localhost:4200")                                                         
        .AllowAnyMethod()
        .AllowAnyHeader()
    );

app.UseAuthorization();

app.MapControllers();

app.Run();
