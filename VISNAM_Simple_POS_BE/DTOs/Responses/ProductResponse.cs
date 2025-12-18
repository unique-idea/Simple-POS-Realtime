namespace VISNAM_Simple_POS_BE.DTOs.Responses
{
    public class ProductResponse
    {
        public Guid ProductResId { get; set; }
        public string ProductResName { get; set; } = string.Empty;
        public decimal ProductResPrice { get; set; } = 0;
    }
}
