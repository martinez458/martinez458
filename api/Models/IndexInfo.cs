using System;
using System.Collections.Generic;

namespace api.Models;

public partial class IndexInfo
{
    public int Id { get; set; }

    public string? IndexEn { get; set; }

    public string? IndexJp { get; set; }

    public bool? Answer { get; set; }

    public string? Description { get; set; }

    public int? Level { get; set; }
}
