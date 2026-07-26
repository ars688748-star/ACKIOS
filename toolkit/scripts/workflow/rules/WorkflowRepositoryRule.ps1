Set-StrictMode -Version Latest

$registration = [WorkflowRuleRegistration]::new()
$registration.Name = "Repository"
$registration.Function = "Invoke-WorkflowRepositoryRule"
$registration.Category = "Repository"
$registration.Priority = "HIGH"

Register-WorkflowRule $registration

function Invoke-WorkflowRepositoryRule {

    $gitStatus = git status --porcelain

    if([string]::IsNullOrWhiteSpace(($gitStatus -join ""))){

        return (New-WorkflowRuleResult `
            -Rule "Repository" `
            -Status "HEALTHY" `
            -Decision "Continue Workflow" `
            -Priority "LOW")

    }

    $result = New-WorkflowRuleResult `
        -Rule "Repository" `
        -Status "WARNING" `
        -Decision "Review Repository" `
        -Priority "HIGH"

    $result.Warnings += "Repository contains uncommitted changes."
    $result.Recommendations += "Review git status before continuing."

    return $result

}
