using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BackVerdadero1.Models
{
    public class Sector
    {
        [Key]
        public int Id_sector { get; set; }

        [Required]
        public string Desc_sector { get; set; }
    }
}
