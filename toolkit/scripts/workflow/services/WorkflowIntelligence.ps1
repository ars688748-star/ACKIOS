Set-StrictMode -Version Latest

function Get-WorkflowIntelligence {

    $metrics = Get-WorkflowDashboardMetrics

    $trend = Get-WorkflowTrendAnalysis

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


    $result.Trend = $trend.OverallTrend

    $result.DurationTrend = $trend.DurationTrend

    $result.ReliabilityTrend = $trend.ReliabilityTrend


    $result.Recommendation = $trend.Recommendation

    $health = New-WorkflowHealth

    $result.Recommendations = Get-WorkflowRecommendations -QualityGate $health.QualityGate


    return $result

}




