namespace VISNAM_Simple_POS_BE.DTOs.Responses
{
    public class OrderResponse
    {
        public Guid OrderResId { get; set; }
        public decimal OrderResTotal { get; set; }
        public DateTime OrderResTimeCreated { get; set; }
        public List<OrderItemResponse> Items { get; set; } = new List<OrderItemResponse>();
    }
}
