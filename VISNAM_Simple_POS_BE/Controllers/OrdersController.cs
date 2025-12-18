using Microsoft.AspNetCore.Mvc;
using VISNAM_Simple_POS_BE.DTOs.Requests;
using VISNAM_Simple_POS_BE.Services.Interfaces;

namespace VISNAM_Simple_POS_BE.Controllers
{
    public class OrdersController : BaseController<OrdersController>
    {
        IOrderService _orderService;
        public OrdersController(ILogger<OrdersController> logger, IOrderService orderService) : base(logger)
        {
            _orderService = orderService;
        }

        [HttpGet]
        public IActionResult GetOrder()
        {
            var orders = _orderService.GetOrders();
            return Ok(orders);
        }

        [HttpPost]
        public async Task<IActionResult> CreateOrder([FromBody] OrderRequest orderRequest)
        {
            if (orderRequest.ProductRequests != null && orderRequest.ProductRequests.Any())
            {
                var result = await _orderService.CreateOrderAsync(orderRequest);
                if (!result)
                {
                    return BadRequest("Id Product Not Esxit");
                }

                return Ok("Create Success");
            }
            return BadRequest("Can Not Create Empty Order");
        }


    }
}
