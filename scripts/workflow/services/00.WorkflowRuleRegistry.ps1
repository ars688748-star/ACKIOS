Set-StrictMode -Version Latest

$script:WorkflowRuleRegistry = @()

function Register-WorkflowRule {

    param(
        [WorkflowRuleRegistration]$Rule
    )

    $script:WorkflowRuleRegistry += $Rule

}

function Get-WorkflowRuleRegistry {

    return $script:WorkflowRuleRegistry

}
