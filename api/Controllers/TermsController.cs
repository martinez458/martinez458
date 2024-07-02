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
    public class TermsController : ControllerBase
    {
        private readonly FxlearningdevContext _context;

        public TermsController(FxlearningdevContext context)
        {
            _context = context;
        }

        // GET: api/Terms
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Term>>> GetTerms()
        {
          if (_context.Terms == null)
          {
              return NotFound();
          }
            return await _context.Terms.ToListAsync();
        }

        // GET: api/Terms/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Term>> GetTerm(int id)
        {
          if (_context.Terms == null)
          {
              return NotFound();
          }
            var term = await _context.Terms.FindAsync(id);

            if (term == null)
            {
                return NotFound();
            }

            return term;
        }

        // PUT: api/Terms/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTerm(int id, Term term)
        {
            if (id != term.Id)
            {
                return BadRequest();
            }

            _context.Entry(term).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TermExists(id))
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

        // POST: api/Terms
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Term>> PostTerm(Term term)
        {
          if (_context.Terms == null)
          {
              return Problem("Entity set 'FxlearningdevContext.Terms'  is null.");
          }
            _context.Terms.Add(term);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTerm", new { id = term.Id }, term);
        }

        // DELETE: api/Terms/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTerm(int id)
        {
            if (_context.Terms == null)
            {
                return NotFound();
            }
            var term = await _context.Terms.FindAsync(id);
            if (term == null)
            {
                return NotFound();
            }

            _context.Terms.Remove(term);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TermExists(int id)
        {
            return (_context.Terms?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
