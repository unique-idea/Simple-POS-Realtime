using AutoMapper;
using Microsoft.AspNetCore.SignalR;
using VISNAM_Simple_POS_BE.Data;
using VISNAM_Simple_POS_BE.DTOs.Responses;
using VISNAM_Simple_POS_BE.Hubs;
using VISNAM_Simple_POS_BE.Services.Interfaces;

namespace VISNAM_Simple_POS_BE.Services.Implements
{
    public class IProductServiceImp : BaseService<IProductServiceImp>, IProductService
    {
        public IProductServiceImp(ILogger<IProductServiceImp> logger, IMapper mapper, IHubContext<SystemHub> hubContext) : base(logger, mapper, hubContext)
        {
        }

        public List<ProductResponse> GetProducts()
        {
            var products = ProductData.products;
            return products.Select(p => _mapper.Map<ProductResponse>(p)).ToList();
        }
    }
}
