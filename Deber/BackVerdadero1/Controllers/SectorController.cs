using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using BackVerdadero1.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackVerdadero1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class SectorController : ControllerBase
    {

        private readonly AplicationDbContext _context;

        public SectorController(AplicationDbContext context)
        {
            _context = context;
        }


        // GET: api/<SectorController>
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            try
            {
                var listSector = await _context.Sector.ToListAsync();
                return Ok(listSector);
            }
            catch (Exception ms)
            {

                return BadRequest(ms.Message);
            }
        }
        // GET: api/<TarjetaController>
        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id)
        {
            try
            {
                var sector = await _context.Sector.FindAsync(id);
                if (sector == null)
                {
                    return NotFound();
                }
                return Ok(sector);
            }
            catch (Exception ms)
            {

                return BadRequest(ms.Message);
            }
        }

    }
}
