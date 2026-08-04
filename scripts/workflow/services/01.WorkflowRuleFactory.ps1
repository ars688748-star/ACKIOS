Set-StrictMode -Version Latest

function New-WorkflowRuleResult {

    param(
        [string]$Rule,
        [string]$Status,
        [string]$Decision,
        [string]$Priority = "NORMAL"
    )

    $result = [WorkflowRuleResult]::new()

    $result.Rule = $Rule
    $result.Status = $Status
    $result.Decision = $Decision
    $result.Priority = $Priority

    return $result

}
