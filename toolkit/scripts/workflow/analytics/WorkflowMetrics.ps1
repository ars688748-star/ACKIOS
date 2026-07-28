function Get-WorkflowMetrics
{
    $history = @(Get-WorkflowHistory)

    if($history.Count -eq 0)
    {
        return [PSCustomObject]@{
            SuccessRate = 0
            WarningRate = 0
            FailureRate = 0
            AverageDurationMs = 0
            TotalRuns = 0
        }
    }

    $total = $history.Count

    $pass = @($history | Where-Object Status -eq 'PASS').Count
    $warning = @($history | Where-Object Status -eq 'WARNING').Count
    $fail = @($history | Where-Object Status -eq 'FAIL').Count

    $average = [Math]::Round(
        (
            @($history.TotalDurationMs) |
            Measure-Object -Average
        ).Average,
        2
    )

    [PSCustomObject]@{
        SuccessRate = [Math]::Round(($pass / $total) * 100,2)
        WarningRate = [Math]::Round(($warning / $total) * 100,2)
        FailureRate = [Math]::Round(($fail / $total) * 100,2)
        AverageDurationMs = $average
        TotalRuns = $total
    }
}
