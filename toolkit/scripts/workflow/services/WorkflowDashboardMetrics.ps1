Set-StrictMode -Version Latest


function Get-WorkflowDashboardMetrics {

    $history = Get-WorkflowExecutionHistory


    $total = @($history).Count


    $passed = @(
        $history |
        Where-Object {
            $_.Status -eq "COMPLETED"
        }
    ).Count


    $failed = @(
        $history |
        Where-Object {
            $_.Status -ne "COMPLETED"
        }
    ).Count


    $successRate = 0

    if($total -gt 0){

        $successRate = [math]::Round(
            ($passed / $total) * 100,
            2
        )

    }


    $durations = @(
        $history |
        Where-Object {
            $_.Duration
        } |
        ForEach-Object {
            [TimeSpan]::Parse($_.Duration)
        }
    )


    $averageDuration = $null

    if($durations.Count -gt 0){

        $ticks = (
            $durations |
            Measure-Object -Property Ticks -Average
        ).Average

        $averageDuration = [TimeSpan]::FromTicks(
            [long]$ticks
        )

    }


    $lastExecutionDuration = $null

    $last = Get-LastWorkflowExecution

    if($last -and $last.Duration){

        $lastExecutionDuration =
            [TimeSpan]::Parse($last.Duration)

    }


    return [PSCustomObject]@{

        TotalExecutions = $total

        PassedExecutions = $passed

        FailedExecutions = $failed

        SuccessRate = $successRate

        AverageDuration = $averageDuration

        LastExecutionDuration = $lastExecutionDuration

    }

}
