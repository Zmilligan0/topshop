using System.Net;
using System.Text.Json;
using API.Errors;

namespace API.Middleware
{
    public class ExceptionMiddleware
    {
        private readonly IHostEnvironment _env;
        private readonly RequestDelegate _next;
        private readonly ILogger<ExceptionMiddleware> _logger;
        public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger, IHostEnvironment env)
        {
            _logger = logger;
            _next = next;
            _env = env;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                //If no exception move onto next stage
                await _next(context);
            }
            catch (Exception ex)
            {
                //If in dev mode then give more details for error messages
                _logger.LogError(ex, ex.Message);
                context.Response.ContentType = "applicaton/json";
                context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

                var response = _env.IsDevelopment()
                    ? new ApiException((int)HttpStatusCode.InternalServerError, ex.Message, ex.StackTrace.ToString())
                    : new ApiException((int)HttpStatusCode.InternalServerError);


                var options = new JsonSerializerOptions{PropertyNamingPolicy = JsonNamingPolicy.CamelCase};
                
                var json = JsonSerializer.Serialize(response);

                await context.Response.WriteAsync(json); 
            }
        }
    }
}