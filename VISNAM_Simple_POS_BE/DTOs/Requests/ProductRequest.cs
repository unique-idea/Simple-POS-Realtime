using System.ComponentModel.DataAnnotations;

namespace VISNAM_Simple_POS_BE.DTOs.Requests
{
    public class ProductRequest
    {
        [Required]
        public Guid ProductReqId { get; set; }
        [Required]
        [Range(1, 999, ErrorMessage = "Quantity must be greater than 0")]
        public int ProductReqQuantity { get; set; }

    }
}
