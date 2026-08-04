Set-StrictMode -Version Latest

function Get-WorkflowTrendAnalysis {

    $history = @(Get-WorkflowExecutionHistory)

    $result = [WorkflowTrendResult]::new()


    if($history.Count -lt 2){

        $result.DurationTrend = "UNKNOWN"

        $result.ReliabilityTrend = "UNKNOWN"

        $result.OverallTrend = "STABLE"

        $result.Recommendation =
            "Not enough execution history for trend analysis"

        return $result

    }


    $durations = @(
        $history |
        Where-Object {
            $_.Duration
        } |
        Select-Object -Last 5 |
        ForEach-Object {

            [TimeSpan]::Parse(
                [string]$_.Duration
            ).TotalSeconds

        }
    )


    if($durations.Count -ge 2){

        $first = $durations[0]

        $last = $durations[-1]


        if($last -lt $first){

            $result.DurationTrend = "IMPROVING"

        }
        elseif($last -gt $first){

            $result.DurationTrend = "DEGRADING"

        }
        else{

            $result.DurationTrend = "STABLE"

        }

    }


    $failed = @(
        $history |
        Where-Object {
            $_.Status -ne "COMPLETED"
        }
    ).Count


    if($failed -eq 0){

        $result.ReliabilityTrend = "STABLE"

    }
    else{

        $result.ReliabilityTrend = "DEGRADING"

    }


    if(
        $result.DurationTrend -eq "DEGRADING" -or
        $result.ReliabilityTrend -eq "DEGRADING"
    ){

        $result.OverallTrend = "DEGRADING"

        $result.Recommendation =
            "Review workflow performance"

    }
    else{

        $result.OverallTrend = "STABLE"

        $result.Recommendation =
            "Workflow performance is stable"

    }


    return $result

}
