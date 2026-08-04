Set-StrictMode -Version Latest

$registration = [WorkflowRuleRegistration]::new()
$registration.Name = "Roadmap"
$registration.Function = "Invoke-WorkflowRoadmapRule"
$registration.Category = "Workflow"
$registration.Priority = "HIGH"

Register-WorkflowRule $registration

function Invoke-WorkflowRoadmapRule {

    if(Test-Roadmap){

        return (New-WorkflowRuleResult `
            -Rule "Roadmap" `
            -Status "HEALTHY" `
            -Decision "Roadmap Verified" `
            -Priority "LOW")

    }

    $result = New-WorkflowRuleResult `
        -Rule "Roadmap" `
        -Status "CRITICAL" `
        -Decision "Roadmap Missing" `
        -Priority "CRITICAL"

    $result.StopPipeline = $true
    $result.Warnings += "MASTER ROADMAP not found."
    $result.Recommendations += "Restore ACKIOS_MASTER_ROADMAP.md"

    return $result

}
