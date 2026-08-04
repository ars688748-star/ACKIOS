Set-StrictMode -Version Latest

$registration = [WorkflowRuleRegistration]::new()
$registration.Name = "Trend"
$registration.Function = "Invoke-WorkflowTrendRule"
$registration.Category = "Analytics"
$registration.Priority = "NORMAL"

Register-WorkflowRule $registration

function Invoke-WorkflowTrendRule {

    $result = [WorkflowRuleResult]::new()
    $result.Rule = "Trend"

    $trend = Get-WorkflowTrendAnalysis

    if($trend.OverallTrend -eq "Improving"){

        $result.Status = "HEALTHY"
        $result.Decision = "Trend Improving"
        $result.Priority = "LOW"

    }
    else{

        $result.Status = "WARNING"
        $result.Decision = "Review Workflow Trend"
        $result.Priority = "NORMAL"
        $result.Recommendations += $trend.Recommendation

    }

    return $result

}
