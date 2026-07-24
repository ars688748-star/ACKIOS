Set-StrictMode -Version Latest

function Get-WorkflowIntelligence {

    $metrics = Get-WorkflowDashboardMetrics

    $result = [WorkflowIntelligenceResult]::new()


    if($metrics.SuccessRate -eq 100){

        $result.Status = "HEALTHY"

    }
    elseif($metrics.SuccessRate -ge 90){

        $result.Status = "WARNING"

    }
    else{

        $result.Status = "CRITICAL"

    }


    $result.PerformanceScore = 100

    if($metrics.AverageDuration){

        if($metrics.AverageDuration.TotalSeconds -gt 60){

            $result.PerformanceScore = 70

        }

    }


    $result.SuccessRate = $metrics.SuccessRate


    if($metrics.FailedExecutions -eq 0){

        $result.Trend = "STABLE"

    }
    else{

        $result.Trend = "DEGRADING"

    }


    switch($result.Status){

        "HEALTHY" {
            $result.Recommendation = "No action required"
        }

        "WARNING" {
            $result.Recommendation = "Review workflow performance"
        }

        default {
            $result.Recommendation = "Investigate workflow failures"
        }

    }


    return $result

}
