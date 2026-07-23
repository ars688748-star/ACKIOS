Set-StrictMode -Version Latest


function Get-WorkflowDashboardAnalytics {

    param(
        [Parameter(Mandatory)]
        $Dashboard
    )


    $metrics = $Dashboard.Metrics


    $failureRate = 0

    if($metrics.TotalExecutions -gt 0){

        $failureRate = [math]::Round(
            (($metrics.FailedExecutions / $metrics.TotalExecutions) * 100),
            2
        )

    }


    $performanceScore = 100


    if($metrics.AverageDuration){

        if($metrics.AverageDuration.TotalSeconds -gt 60){

            $performanceScore = 70

        }

    }


    $status = "HEALTHY"


    if($metrics.FailedExecutions -gt 0){

        $status = "WARNING"

    }


    return [PSCustomObject]@{


        Performance = [PSCustomObject]@{

            AverageDuration =
                $metrics.AverageDuration

            LastExecutionDuration =
                $metrics.LastExecutionDuration

            Score =
                $performanceScore

        }


        Reliability = [PSCustomObject]@{

            SuccessRate =
                $metrics.SuccessRate

            FailureRate =
                $failureRate

        }


        Trends = [PSCustomObject]@{

            TotalExecutions =
                $metrics.TotalExecutions

        }


        Insights = [PSCustomObject]@{

            Status =
                $status

            Recommendation =
                if($status -eq "HEALTHY"){
                    "No action required"
                }
                else{
                    "Review failed executions"
                }

        }

    }

}
