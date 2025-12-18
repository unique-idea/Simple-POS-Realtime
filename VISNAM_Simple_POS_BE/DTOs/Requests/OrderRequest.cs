using System.ComponentModel.DataAnnotations;

namespace VISNAM_Simple_POS_BE.DTOs.Requests
{
    public class OrderRequest
    {
        [Required]
        public ICollection<ProductRequest>? ProductRequests { get; set; }
    }
}
