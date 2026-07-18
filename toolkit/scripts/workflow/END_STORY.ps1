Set-StrictMode -Version Latest

$ErrorActionPreference = "Stop"

. "$PSScriptRoot\Workflow.Core.ps1"

Initialize-Workflow

Invoke-Step "Build" {
    Invoke-Build -ContinueOnError
} -ContinueOnError

Invoke-Step "Tests" {
    Invoke-Tests
}

Invoke-Step "Complete Story" {

    $state = Get-AckiWorkflowState
Test-Story $state.CurrentStory | Out-Null


    Set-StoryStatus $state.CurrentStory "Completed" | Out-Null
}

Invoke-Step "Advance Story" {
    Advance-AckiStory | Out-Null
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host " ACKIOS END STORY" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

Write-Host "Story completed."
Write-Host "Run START_CHAT to continue development."
