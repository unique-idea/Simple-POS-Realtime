namespace VISNAM_Simple_POS_BE.Models
{
    public class OrderItem
    {
        public Guid ProductId { get; set; }
        public string ProductName { get; set; } = string.Empty;
        public int Quantity { get; set; }
    }
}
