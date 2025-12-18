using AutoMapper;
using Microsoft.AspNetCore.SignalR;
using VISNAM_Simple_POS_BE.Data;
using VISNAM_Simple_POS_BE.DTOs.Requests;
using VISNAM_Simple_POS_BE.DTOs.Responses;
using VISNAM_Simple_POS_BE.Hubs;
using VISNAM_Simple_POS_BE.Models;
using VISNAM_Simple_POS_BE.Services.Interfaces;

namespace VISNAM_Simple_POS_BE.Services.Implements
{
    public class IOrderServiceImp : BaseService<IProductServiceImp>, IOrderService
    {
        public IOrderServiceImp(ILogger<IProductServiceImp> logger, IMapper mapper, IHubContext<SystemHub> hubContext) : base(logger, mapper, hubContext)
        {
        }

        public async Task<bool> CreateOrderAsync(OrderRequest orderRequest)
        {
            var orderItems = new List<OrderItem>();
            decimal total = 0;

            foreach (var pr in orderRequest.ProductRequests!)
            {
                var product = ProductData.products.Find(x => x.ProductId == pr.ProductReqId);
                if (product == null) { return false; }

                var duplicateProduct = orderItems.SingleOrDefault(x => x.ProductId == pr.ProductReqId);
                if (duplicateProduct == null) { 
                    orderItems.Add(new OrderItem { 
                        ProductId = pr.ProductReqId,
                        ProductName = product.Name,
                        Quantity = pr.ProductReqQuantity});
                }
                else
                {
                    duplicateProduct.Quantity += pr.ProductReqQuantity;
                }

                total += product.Price * pr.ProductReqQuantity;
            }

            var newOrder = new Order();
            newOrder.Items = orderItems;
            newOrder.Total = total;

            OrderData.orders.Add(newOrder);

            await SyncOrder(newOrder);

            return true;
        }

        private async Task SyncOrder(Order newOrder)
        {
            var data = _mapper.Map<OrderResponse>(newOrder);
            await _hubContext.Clients.All.SendAsync("newOrderResponse",data);
        }

        public List<OrderResponse> GetOrders()
        {
            return OrderData.orders.Select(o => _mapper.Map<OrderResponse>(o)).ToList();
        }
    }
}
