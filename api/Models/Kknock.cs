using System;
using System.Collections.Generic;

namespace api.Models;

public partial class Kknock
{
    public int Id { get; set; }

    public int? ChartId { get; set; }

    public int? IndexId { get; set; }

    public int? TimeFrame { get; set; }

    public string? TimeFrameUnit { get; set; }

    public string? CurrencyUnit { get; set; }
}
