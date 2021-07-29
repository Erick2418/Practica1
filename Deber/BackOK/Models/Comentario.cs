using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

namespace BackOK.Models
{
    public class Comentario
    {
        public int Id { get; set; }
        [Required]
        public string Titulo { get; set; }
        [Required]
        public string  Creador { get; set; }
        [Required]
        public string Texto { get; set; }
        [Required]
        public DateTime FechaCrecaion { get; set; }





    }
}
