Set-StrictMode -Version Latest

$registration = [WorkflowRuleRegistration]::new()
$registration.Name = "Build"
$registration.Function = "Invoke-WorkflowBuildRule"
$registration.Category = "Build"
$registration.Priority = "CRITICAL"

Register-WorkflowRule $registration

function Invoke-WorkflowBuildRule {

    $result = New-WorkflowRuleResult -Rule "Build"

    $result.Rule = "Build"

    $state = Get-AckiWorkflowState

    if($state.Build -eq "PASS"){

        $result.Status = "HEALTHY"
        $result.Decision = "Build Passed"
        $result.Priority = "LOW"

    }
    else{

        $result.Status = "CRITICAL"
        $result.Decision = "Fix Build"
        $result.Priority = "CRITICAL"
        $result.StopPipeline = $true
        $result.Warnings += "Build failed."
        $result.Recommendations += "Run npm run build."

    }

    return $result

}
