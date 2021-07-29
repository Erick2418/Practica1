using System;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackOK.Models;

namespace BackOK
{
    public class AplicationDBContext:DBContext
    {
        public DbSet<Comentario> Comentarios { get; set; }

       
    }
}
