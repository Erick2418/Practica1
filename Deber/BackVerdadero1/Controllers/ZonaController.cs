using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackVerdadero1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ZonaController : ControllerBase
    {
        private readonly AplicationDbContext _context;

        public ZonaController(AplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/<ZonaController>
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            try
            {
                var listZona = await _context.Zona.ToListAsync();
                return Ok(listZona);
            }
            catch (Exception ms)
            {
                return BadRequest(ms.Message);
            }
        }
        // GET: api/<ZonaController>
        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id)
        {
            try
            {
                var zona = await _context.Zona.FindAsync(id);
                if (zona == null)
                {
                    return NotFound();
                }
                return Ok(zona);
            }
            catch (Exception ms)
            {
                return BadRequest(ms.Message);
            }
        }



    }
}
