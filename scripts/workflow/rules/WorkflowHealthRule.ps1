Set-StrictMode -Version Latest

$registration = [WorkflowRuleRegistration]::new()
$registration.Name = "Health"
$registration.Function = "Invoke-WorkflowHealthRule"
$registration.Category = "Workflow"
$registration.Priority = "HIGH"

Register-WorkflowRule $registration

function Invoke-WorkflowHealthRule {

    $health = New-WorkflowHealth

    $result = New-WorkflowRuleResult -Rule "Health"
    $result.Rule = "Health"

    if($health.Overall -eq [WorkflowStatus]::Pass){

        $result.Status = "HEALTHY"
        $result.Decision = "Workflow Healthy"
        $result.Priority = "LOW"

    }
    else{

        $result.Status = "WARNING"
        $result.Decision = "Review Workflow Health"
        $result.Priority = "HIGH"

        if($health.Repository -ne [WorkflowStatus]::Pass){
            $result.Warnings += "Repository health is not PASS."
        }

        if($health.Build -ne [WorkflowStatus]::Pass){
            $result.Warnings += "Build health is not PASS."
        }

        if($health.Tests -ne [WorkflowStatus]::Pass){
            $result.Warnings += "Tests health is not PASS."
        }

        $result.Recommendations += "Review workflow health."

    }

    return $result

}
