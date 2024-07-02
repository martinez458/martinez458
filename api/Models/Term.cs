using System;
using System.Collections.Generic;

namespace api.Models;

public partial class Term
{
    public int Id { get; set; }

    public string? Term1 { get; set; }

    public string? TermYomi { get; set; }

    public string? Gyou { get; set; }

    public string? Description { get; set; }

    public string? Category { get; set; }
}
