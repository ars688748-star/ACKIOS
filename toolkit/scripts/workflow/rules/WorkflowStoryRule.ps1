Set-StrictMode -Version Latest

$registration = [WorkflowRuleRegistration]::new()
$registration.Name = "Story"
$registration.Function = "Invoke-WorkflowStoryRule"
$registration.Category = "Workflow"
$registration.Priority = "HIGH"

Register-WorkflowRule $registration

function Invoke-WorkflowStoryRule {

    $catalog = Test-StoryCatalog -Quiet

    if($catalog.Warnings -eq 0){

        return (New-WorkflowRuleResult `
            -Rule "Story" `
            -Status "HEALTHY" `
            -Decision "Story Catalog Verified" `
            -Priority "LOW")

    }

    $result = New-WorkflowRuleResult `
        -Rule "Story" `
        -Status "WARNING" `
        -Decision "Review Story Catalog" `
        -Priority "HIGH"

    $result.Warnings += "Story Catalog contains validation warnings."

    foreach($issue in $catalog.Issues){
        $result.Recommendations += $issue
    }

    return $result

}
