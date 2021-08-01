using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BackVerdadero1.Models
{
    public class Persona
    {
        [Key]
        public int Id_persona { get; set; }


        [Required]
        public string Nom_persona { get; set; }

        [Required]
        public string Fec_nacimiento { get; set; }

        [Required]
        public int Id_sector { get; set; }

        [Required]
        public int Id_zona { get; set; }

        [Required]
        public string Sueldo { get; set; }


    }
}
