using AutoMapper;
using VISNAM_Simple_POS_BE.DTOs.Responses;
using VISNAM_Simple_POS_BE.Models;

namespace VISNAM_Simple_POS_BE.Mappers
{
    public class OrderMapper : Profile
    {
        public OrderMapper()
        {
            CreateMap<Order, OrderResponse>()
              .ForMember(dest => dest.OrderResId, opt => opt.MapFrom(src => src.OrderId))
              .ForMember(dest => dest.OrderResTotal, opt => opt.MapFrom(src => src.Total))
              .ForMember(dest => dest.Items, opt => opt.MapFrom(src => src.Items))
              .ForMember(dest => dest.OrderResTimeCreated, opt => opt.MapFrom(src => src.TimeCreated));

            CreateMap<OrderItem, OrderItemResponse>()
             .ForMember(dest => dest.ProductName, opt => opt.MapFrom(src => src.ProductName))
             .ForMember(dest => dest.ProductQuantity, opt => opt.MapFrom(src => src.Quantity));
        }
    }
}
