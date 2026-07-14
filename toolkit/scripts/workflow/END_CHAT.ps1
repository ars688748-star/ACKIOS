Set-StrictMode -Version Latest

$ErrorActionPreference = "Stop"

. "$PSScriptRoot\LIB.ps1"

Initialize-Workflow

Invoke-Step "Update Chat Context" {
    Update-ChatContext
}

Invoke-Step "Update Checkpoint" {
    Update-Checkpoint
}

Show-WorkflowSummary
