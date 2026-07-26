Set-StrictMode -Version Latest

$registration = [WorkflowRuleRegistration]::new()
$registration.Name = "Tests"
$registration.Function = "Invoke-WorkflowTestsRule"
$registration.Category = "Tests"
$registration.Priority = "CRITICAL"

Register-WorkflowRule $registration

function Invoke-WorkflowTestsRule {

    $result = New-WorkflowRuleResult -Rule "Tests"

    $result.Rule = "Tests"

    $state = Get-AckiWorkflowState

    if($state.Tests -eq "PASS"){

        $result.Status = "HEALTHY"
        $result.Decision = "Tests Passed"
        $result.Priority = "LOW"

    }
    else{

        $result.Status = "CRITICAL"
        $result.Decision = "Run Tests"
        $result.Priority = "CRITICAL"
        $result.StopPipeline = $true
        $result.Warnings += "Tests failed."
        $result.Recommendations += "Run npm test."

    }

    return $result

}
