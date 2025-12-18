using VISNAM_Simple_POS_BE.DTOs.Requests;
using VISNAM_Simple_POS_BE.DTOs.Responses;

namespace VISNAM_Simple_POS_BE.Services.Interfaces
{
    public interface IOrderService
    {
        List<OrderResponse> GetOrders();
        Task<Boolean> CreateOrderAsync(OrderRequest orderRequest);
    }
}
