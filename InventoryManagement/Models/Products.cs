using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace InventoryManagement.Models
{
    public class Products
    {
        [Key]
        public int ProductID { get; set; }
        public string ProdName { get; set; }
        public decimal Price { get; set; }
        public DateTime DateAdded { get; set; }
       
        public Products()
        {
            DateAdded = System.DateTime.Now;
        }
    }
   
}