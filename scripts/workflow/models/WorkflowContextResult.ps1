class WorkflowContextResult
{
    [datetime]$GeneratedAt

    [object[]]$History

    [int]$TotalRuns

    [int]$PassRuns

    [int]$WarningRuns

    [int]$FailureRuns

    [double]$AverageDurationMs

    [double]$FastestRun

    [double]$SlowestRun
}
