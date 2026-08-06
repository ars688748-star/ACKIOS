Set-StrictMode -Version Latest

$registration = [WorkflowRuleRegistration]::new()
$registration.Name = "Guardian"
$registration.Function = "Invoke-WorkflowGuardianRule"
$registration.Category = "Publication"
$registration.Priority = "HIGH"

Register-WorkflowRule $registration

function Invoke-WorkflowGuardianRule {

    $result = New-WorkflowRuleResult -Rule "Guardian"

    $result.Status = "HEALTHY"
    $result.Decision = "Publication Ready"
    $result.Priority = "LOW"

    # TODO:
    # Здесь будет вызов Publication Guardian
    # Scanner
    # Classifier
    # IP Analyzer
    # Policy Engine
    # Snapshot Validation

    return $result

}
