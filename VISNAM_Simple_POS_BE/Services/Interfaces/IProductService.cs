using VISNAM_Simple_POS_BE.DTOs.Responses;

namespace VISNAM_Simple_POS_BE.Services.Interfaces
{
    public interface IProductService
    {
        List<ProductResponse> GetProducts();
    }
}
