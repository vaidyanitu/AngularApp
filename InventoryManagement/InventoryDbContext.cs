using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using InventoryManagement.Models;

namespace InventoryManagement
{
    public class InventoryDbContext:DbContext
    {
        public InventoryDbContext():base("DefaultConnection")
        {
           
        }
        public DbSet<Products> Products { get; set; }
    }
}