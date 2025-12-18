namespace VISNAM_Simple_POS_BE.Models
{
    public class Order
    {
        public Guid OrderId { get; set; } = Guid.NewGuid();
        public decimal Total { get; set; } = 0;
        public List<OrderItem> Items { get; set; } = new List<OrderItem>();
        public DateTime TimeCreated { get; set; } = DateTime.Now;
    }
}
