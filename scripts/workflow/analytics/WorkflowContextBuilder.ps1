function New-WorkflowContext
{
    $history = @(Get-WorkflowHistory)

    $context = [WorkflowContextResult]::new()

    $context.GeneratedAt = Get-Date

    $context.History = $history

    $context.TotalRuns = $history.Count

    $context.PassRuns =
        @($history | Where-Object Status -eq "PASS").Count

    $context.WarningRuns =
        @($history | Where-Object Status -eq "WARNING").Count

    $context.FailureRuns =
        @($history | Where-Object Status -eq "FAIL").Count

    $context.AverageDurationMs =
        if($history.Count)
        {
            ($history | Measure-Object TotalDurationMs -Average).Average
        }
        else
        {
            0
        }

    $context.FastestRun =
        if($history.Count)
        {
            ($history | Measure-Object TotalDurationMs -Minimum).Minimum
        }
        else
        {
            0
        }

    $context.SlowestRun =
        if($history.Count)
        {
            ($history | Measure-Object TotalDurationMs -Maximum).Maximum
        }
        else
        {
            0
        }

    return $context
}
