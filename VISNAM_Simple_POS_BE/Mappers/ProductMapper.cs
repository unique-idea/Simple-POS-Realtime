using AutoMapper;
using VISNAM_Simple_POS_BE.DTOs.Responses;
using VISNAM_Simple_POS_BE.Models;

namespace VISNAM_Simple_POS_BE.Mappers
{
    public class ProductMapper : Profile
    {
        public ProductMapper()
        {
            CreateMap<Product, ProductResponse>()
             .ForMember(dest => dest.ProductResId, opt => opt.MapFrom(src => src.ProductId))
             .ForMember(dest => dest.ProductResName, opt => opt.MapFrom(src => src.Name))
             .ForMember(dest => dest.ProductResPrice, opt => opt.MapFrom(src => src.Price));
        }
    }
}
