using System;
using System.Collections.Generic;

namespace api.Models;

public partial class Report
{
    public int Id { get; set; }

    public string? UserName { get; set; }

    public string? Category { get; set; }

    public int? QuestionId { get; set; }

    public int? AnswerTimeMs { get; set; }

    public bool? Result { get; set; }

    public DateTime? CreatedDate { get; set; }
}
