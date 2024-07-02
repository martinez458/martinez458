using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using api.Models;
using Newtonsoft.Json.Linq;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IndexInfoesController : ControllerBase
    {
        private readonly FxlearningdevContext _context;

        public IndexInfoesController(FxlearningdevContext context)
        {
            _context = context;
        }

        // GET: api/IndexInfoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<IndexInfo>>> GetIndexInfos()
        {
          if (_context.IndexInfos == null)
          {
              return NotFound();
          }
            return await _context.IndexInfos.ToListAsync();
        }

        // GET: api/IndexInfoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IndexInfo>> GetIndexInfo(int id)
        {
          if (_context.IndexInfos == null)
          {
              return NotFound();
          }
            var indexInfo = await _context.IndexInfos.FindAsync(id);

            if (indexInfo == null)
            {
                return NotFound();
            }

            return indexInfo;
        }

        // GET: api/IndexInfoes/count
        // すべての指標数を返す
        [HttpGet("count")]
        public async Task<ActionResult<int>> GetIndexInfoCount()
        {
            if (_context.IndexInfos == null)
            {
                return NotFound();
            }

            var count = await _context.IndexInfos.CountAsync();
            return count;
        }

        [HttpGet("Explanation")]
        public async Task<ActionResult<IndexInfo>> GetIndexInfoByIndexName(int indexId)
        {
            if (_context.IndexInfos == null)
            {
                return NotFound();
            }
            var indexInfo = await _context.IndexInfos.Where(i => i.Id == indexId).FirstOrDefaultAsync();

            return indexInfo;
        }

        // PUT: api/IndexInfoes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIndexInfo(int id, IndexInfo indexInfo)
        {
            if (id != indexInfo.Id)
            {
                return BadRequest();
            }

            _context.Entry(indexInfo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IndexInfoExists(id))
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

        // POST: api/IndexInfoes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<IndexInfo>> PostIndexInfo(IndexInfo indexInfo)
        {
          if (_context.IndexInfos == null)
          {
              return Problem("Entity set 'FxlearningdevContext.IndexInfos'  is null.");
          }
            _context.IndexInfos.Add(indexInfo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIndexInfo", new { id = indexInfo.Id }, indexInfo);
        }

        // DELETE: api/IndexInfoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteIndexInfo(int id)
        {
            if (_context.IndexInfos == null)
            {
                return NotFound();
            }
            var indexInfo = await _context.IndexInfos.FindAsync(id);
            if (indexInfo == null)
            {
                return NotFound();
            }

            _context.IndexInfos.Remove(indexInfo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool IndexInfoExists(int id)
        {
            return (_context.IndexInfos?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
