using Microsoft.AspNetCore.Mvc;

namespace VISNAM_Simple_POS_BE.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class BaseController<T> : ControllerBase where T : BaseController<T>
    {
        protected ILogger<T> _logger;

        public BaseController(ILogger<T> logger)
        {
            _logger = logger;
        }
    }
}
