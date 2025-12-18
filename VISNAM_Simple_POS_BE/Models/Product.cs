namespace VISNAM_Simple_POS_BE.Models
{
    public class Product
    {
        public Guid ProductId { get; set; }
        public string Name { get; set; } = string.Empty;
        public decimal Price { get; set; } = 0;
    }
}
