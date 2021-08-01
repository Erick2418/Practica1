using BackVerdadero1.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackVerdadero1
{
    public class AplicationDbContext : DbContext
    {
        
        public DbSet<Sector> Sector { get; set; }
        public DbSet<Zona> Zona { get; set; }
        public DbSet<Persona> Persona { get; set; }
        public AplicationDbContext(DbContextOptions<AplicationDbContext> options) : base(options)
        {

        }
    }
}
