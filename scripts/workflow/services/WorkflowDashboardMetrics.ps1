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

            if($_.Duration -is [TimeSpan]) {

                $_.Duration

            }
            elseif($_.Duration.PSObject.Properties.Name -contains "Ticks") {

                [TimeSpan]::FromTicks(
                    [long]$_.Duration.Ticks
                )

            }
            else {

                [TimeSpan]::Parse(
                    [string]$_.Duration
                )

            }

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

        if($last.Duration -is [TimeSpan]){

            $lastExecutionDuration = $last.Duration

        }
        elseif($last.Duration.PSObject.Properties.Name -contains "Ticks"){

            $lastExecutionDuration =
                [TimeSpan]::FromTicks(
                    [long]$last.Duration.Ticks
                )

        }
        else{

            $lastExecutionDuration =
                [TimeSpan]::Parse(
                    [string]$last.Duration
                )

        }

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




