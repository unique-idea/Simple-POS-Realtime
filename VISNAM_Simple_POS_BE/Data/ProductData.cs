using VISNAM_Simple_POS_BE.Models;

namespace VISNAM_Simple_POS_BE.Data
{
    public static class ProductData
    {
        public static List<Product> products = new List<Product>()
        {
           new Product{ProductId = Guid.NewGuid(),Name = "Apple", Price = 100000},
           new Product{ProductId = Guid.NewGuid(),Name = "Banana", Price = 120000},
           new Product{ProductId = Guid.NewGuid(),Name = "Kiwi", Price = 150000},
           new Product{ProductId = Guid.NewGuid(),Name = "Coconut", Price = 170000},
           new Product{ProductId = Guid.NewGuid(),Name = "Mango", Price = 200000},
           
           new Product{ProductId = Guid.NewGuid(),Name = "Blue Berry", Price = 220000},
           new Product{ProductId = Guid.NewGuid(),Name = "Red Berry", Price = 220000},
           new Product{ProductId = Guid.NewGuid(),Name = "Grape", Price = 250000},
           new Product{ProductId = Guid.NewGuid(),Name = "Durian", Price = 270000},
           new Product{ProductId = Guid.NewGuid(),Name = "Orange", Price = 300000},
        };
    }
}
