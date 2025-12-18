using Microsoft.AspNetCore.Mvc;
using VISNAM_Simple_POS_BE.Services.Interfaces;

namespace VISNAM_Simple_POS_BE.Controllers
{
    public class ProductsController : BaseController<ProductsController>
    {
        IProductService _productService;
        public ProductsController(ILogger<ProductsController> logger, IProductService productService) : base(logger)
        {
            _productService = productService;
        }

        [HttpGet]
        public IActionResult GetProducts()
        {
            var products = _productService.GetProducts();
            return Ok(products);
        }

    }
}
