function Get-WorkflowTrend
{
    $history = @(Get-WorkflowHistory)

    if($history.Count -lt 2)
    {
        return [PSCustomObject]@{
            Trend = "INSUFFICIENT_DATA"
            DifferenceMs = 0
            PreviousDurationMs = 0
            CurrentDurationMs = 0
        }
    }

    $previous = [double]$history[$history.Count-2].TotalDurationMs
    $current  = [double]$history[$history.Count-1].TotalDurationMs

    $difference = [math]::Round($current - $previous,2)

    if($difference -lt 0)
    {
        $trend = "FASTER"
    }
    elseif($difference -gt 0)
    {
        $trend = "SLOWER"
    }
    else
    {
        $trend = "UNCHANGED"
    }

    [PSCustomObject]@{
        Trend = $trend
        DifferenceMs = $difference
        PreviousDurationMs = $previous
        CurrentDurationMs = $current
    }
}
