Set-StrictMode -Version Latest

$ErrorActionPreference = "Stop"

. "$PSScriptRoot\LIB.ps1"

Initialize-Workflow

Invoke-Step "Build" {

    Invoke-Build -ContinueOnError

} -ContinueOnError

Invoke-Step "Tests" {
    Invoke-Tests
}

Invoke-Step "Save Workflow State" {
    Save-WorkflowState
}

Invoke-Step "Update Chat Context" {
    Update-ChatContext
}

Invoke-Step "Update Checkpoint" {
    Update-Checkpoint
}

Invoke-Step "Generate Start Chat Prompt" {
    Generate-StartChatPrompt
}

Show-WorkflowSummary

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host " ACKIOS END CHAT COMPLETED" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Workflow state saved."
Write-Host "Ready to open a new ChatGPT chat."
Write-Host ""



