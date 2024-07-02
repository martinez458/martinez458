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
    public class ReportsController : ControllerBase
    {
        private readonly FxlearningdevContext _context;

        public ReportsController(FxlearningdevContext context)
        {
            _context = context;
        }

        // GET: api/Reports
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Report>>> GetReports()
        {
          if (_context.Reports == null)
          {
              return NotFound();
          }
            return await _context.Reports.ToListAsync();
        }

        // GET: api/Reports/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Report>> GetReport(int id)
        {
          if (_context.Reports == null)
          {
              return NotFound();
          }
            var report = await _context.Reports.FindAsync(id);

            if (report == null)
            {
                return NotFound();
            }

            return report;
        }

        // GET: api/Reports/UserName
        [HttpGet("user/{category}&{userName}")]
        public async Task<ActionResult<IEnumerable<Report>>> GetReport(string category, string userName)
        {
            if (_context.Reports == null)
            {
                return NotFound();
            }
            var report = await _context.Reports.Where(r => r.UserName == userName && r.Category == category).ToListAsync();

            if (report == null)
            {
                return NotFound();
            }

            return report;
        }

        // GET: api/Reports/Week
        [HttpGet("week/{category}&{userName}")]
        public async Task<ActionResult<IEnumerable<Report>>> GetWeekReport(string category, string userName)
        {
            DateTime sevenDaysAgo = DateTime.Today.AddDays(-7);
            
            if (_context.Reports == null)
            {
                return NotFound();
            }
            var report = await _context.Reports.Where(r => r.Category == category && r.CreatedDate >= sevenDaysAgo && r.UserName == userName).ToListAsync();

            if (report == null)
            {
                return NotFound();
            }

            return report;
        }

        // GET: api/Reports/count
        [HttpGet("count/{category}&{userName}")]
        public async Task<ActionResult<int>> GetReportCount(string category, string userName)
        {
            if (_context.Reports == null)
            {
                return NotFound();
            }
            var reportCount = await _context.Reports.Where(r => r.Category == category && r.UserName == userName).CountAsync();

            return reportCount;
        }

        // GET: api/Reports/correctCount
        [HttpGet("correctCount/{category}&{userName}")]
        public async Task<ActionResult<int>> GetCorrectResultCount(string category, string userName)
        {
            if (_context.Reports == null)
            {
                return NotFound();
            }
            var correctCount = await _context.Reports.Where(r => r.Category == category && r.UserName == userName && r.Result == true).CountAsync();

            return correctCount;
        }

        // GET: api/Reports/answerTime
        [HttpGet("answerTime/{category}&{userName}")]
        public async Task<ActionResult<double>> GetAvgAnswerTime(string category, string userName)
        {
            if (_context.Reports == null)
            {
                return NotFound();
            }
            var avgAnswerTimeMs = await _context.Reports.Where(r => r.Category == category && r.UserName == userName).Select(r => r.AnswerTimeMs).AverageAsync();

            return avgAnswerTimeMs;
        }

        [HttpGet("statistics/{query}")]
        public async Task<ActionResult<IEnumerable<Report>>> GetStatictics(string query)
        {
            if (_context.Reports == null)
            {
                return NotFound();
            }

            var s = query.Split('&');
            var id = int.Parse(s[0].Split('=')[1]);
            var category = s[1].Split('=')[1];
            var report = await _context.Reports.Where(r => r.QuestionId == id && r.Category == category).ToListAsync();

            if (report == null)
            {
                return NotFound();
            }

            return report;
        }

        // PUT: api/Reports/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReport(int id, Report report)
        {
            if (id != report.Id)
            {
                return BadRequest();
            }

            _context.Entry(report).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReportExists(id))
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

        // POST: api/Reports
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Report>> PostReport(Report report)
        {
          if (_context.Reports == null)
          {
              return Problem("Entity set 'FxlearningdevContext.Reports'  is null.");
          }
            _context.Reports.Add(report);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReport", new { id = report.Id }, report);
        }

        // DELETE: api/Reports/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReport(int id)
        {
            if (_context.Reports == null)
            {
                return NotFound();
            }
            var report = await _context.Reports.FindAsync(id);
            if (report == null)
            {
                return NotFound();
            }

            _context.Reports.Remove(report);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ReportExists(int id)
        {
            return (_context.Reports?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
