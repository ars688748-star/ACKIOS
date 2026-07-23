Set-StrictMode -Version Latest

$ErrorActionPreference = "Stop"

. "$PSScriptRoot\Workflow.Core.ps1"

Initialize-Workflow

$steps = @()

$steps += Invoke-Step "Build" {
    Invoke-Build -ContinueOnError
} -ContinueOnError

$steps += Invoke-Step "Tests" {
    Invoke-Tests
}

$steps += Invoke-Step "Complete Story" {

    $state = Get-AckiWorkflowState
Test-Story $state.CurrentStory | Out-Null


    Set-StoryStatus $state.CurrentStory "Completed" | Out-Null
}

$steps += Invoke-Step "Advance Story" {
    Advance-AckiStory | Out-Null
}

$report = New-WorkflowExecutionReport -Steps $steps

$health = New-WorkflowHealth

Show-WorkflowSummary `
    -ExecutionReport $report `
    -Health $health

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host " ACKIOS END STORY" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

Write-Host "Story completed."
Write-Host "Run START_CHAT to continue development."





