using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using api.Models;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KknocksController : ControllerBase
    {
        private readonly FxlearningdevContext _context;

        public KknocksController(FxlearningdevContext context)
        {
            _context = context;
        }

        // GET: api/Kknocks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Kknock>>> GetKknocks()
        {
          if (_context.Kknocks == null)
          {
              return NotFound();
          }
            return await _context.Kknocks.ToListAsync();
        }

        // GET: api/Kknocks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Kknock>> GetKknock(int id)
        {
          if (_context.Kknocks == null)
          {
              return NotFound();
          }
            var kknock = await _context.Kknocks.FindAsync(id);

            if (kknock == null)
            {
                return NotFound();
            }

            return kknock;
        }

        [HttpGet("question/{indexId}")]
        public async Task<ActionResult<Kknock>> GetKknockByIndexId(int indexId)
        {
            if (_context.Kknocks == null)
            {
                return NotFound();
            }
            Random rnd = new Random();
            var count = await _context.Kknocks.Where(k => k.IndexId == indexId).CountAsync();

            // 登録されていない場合
            if (count <= 0) { 
                return NotFound();
            }
            var i = rnd.Next(1, count);
            var kknock = await _context.Kknocks.Where(k => k.ChartId == i && k.IndexId == indexId).FirstOrDefaultAsync();

            if (kknock == null)
            {
                return NotFound();
            }
            return kknock;
        }

        // PUT: api/Kknocks/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutKknock(int id, Kknock kknock)
        {
            if (id != kknock.Id)
            {
                return BadRequest();
            }

            _context.Entry(kknock).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KknockExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Kknocks
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Kknock>> PostKknock(Kknock kknock)
        {
          if (_context.Kknocks == null)
          {
              return Problem("Entity set 'FxlearningdevContext.Kknocks'  is null.");
          }
            _context.Kknocks.Add(kknock);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetKknock", new { id = kknock.Id }, kknock);
        }

        // DELETE: api/Kknocks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteKknock(int id)
        {
            if (_context.Kknocks == null)
            {
                return NotFound();
            }
            var kknock = await _context.Kknocks.FindAsync(id);
            if (kknock == null)
            {
                return NotFound();
            }

            _context.Kknocks.Remove(kknock);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool KknockExists(int id)
        {
            return (_context.Kknocks?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
