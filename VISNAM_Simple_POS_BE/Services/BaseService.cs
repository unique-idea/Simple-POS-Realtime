using AutoMapper;
using Microsoft.AspNetCore.SignalR;
using VISNAM_Simple_POS_BE.Hubs;

namespace VISNAM_Simple_POS_BE.Services
{
    public abstract class BaseService<T> where T : class
    {
        protected readonly IHubContext<SystemHub> _hubContext;
        protected ILogger<T> _logger;
        protected IMapper _mapper;

        public BaseService(ILogger<T> logger, IMapper mapper, IHubContext<SystemHub> hubContext)
        {
            _logger = logger;
            _mapper = mapper;
            _hubContext = hubContext;
        }
    }
}
