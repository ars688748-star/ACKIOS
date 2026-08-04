function Get-WorkflowHealth
{
    $metrics = Get-WorkflowMetrics

    if($metrics.FailureRate -gt 0)
    {
        $state = "CRITICAL"
    }
    elseif($metrics.WarningRate -gt 0)
    {
        $state = "WARNING"
    }
    else
    {
        $state = "HEALTHY"
    }

    [PSCustomObject]@{
        State = $state
        SuccessRate = $metrics.SuccessRate
        WarningRate = $metrics.WarningRate
        FailureRate = $metrics.FailureRate
        AverageDurationMs = $metrics.AverageDurationMs
        TotalRuns = $metrics.TotalRuns
        Timestamp = Get-Date
    }
}
