function Get-WorkflowAnalytics
{
    param(
        $Context = $null
    )

    if($null -eq $Context)
    {
        $Context = New-WorkflowContext
    }

    $history = $Context.History

    [PSCustomObject]@{

        TotalRuns = $Context.TotalRuns

        AverageDurationMs = $Context.AverageDurationMs

        WarningCount = $Context.WarningRuns

        PassCount = $Context.PassRuns

        FailCount = $Context.FailureRuns

        FastestRun =
            if($history.Count)
            {
                ($history | Measure-Object TotalDurationMs -Minimum).Minimum
            }
            else
            {
                0
            }

        SlowestRun =
            if($history.Count)
            {
                ($history | Measure-Object TotalDurationMs -Maximum).Maximum
            }
            else
            {
                0
            }
    }
}
