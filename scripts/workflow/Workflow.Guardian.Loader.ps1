$WorkflowGuardianService = Join-Path $PSScriptRoot "services\WorkflowGuardian.ps1"

if (Test-Path $WorkflowGuardianService) {
    . $WorkflowGuardianService

    if (Get-Command Invoke-WorkflowGuardian -ErrorAction SilentlyContinue) {
        Invoke-WorkflowGuardian
    }
}

. "$PSScriptRoot\services\WorkflowGuardianEndChat.ps1"

