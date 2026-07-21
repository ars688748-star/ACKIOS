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

Invoke-Step "Save Workflow State" {

    $state = Get-AckiWorkflowState
    Save-WorkflowState -State $state
    
    if (Test-Roadmap) {
        Update-RoadmapFromWorkflowState
    }

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

Invoke-Step "Repository Boundary" {

    $boundary = Test-RepositoryBoundary

    if (-not $boundary.SafeToPublish) {

        Write-Warning "Repository Boundary violations detected:"

        $boundary.Violations |
            Format-Table Path,Type,Rule -AutoSize

        Write-Warning "Repository is not ready for release. END_RELEASE will refuse publication until these violations are resolved."

    }

} -ContinueOnError

Invoke-Step "Git Add" {

    Invoke-GitAdd

}

Invoke-Step "Git Commit" {

    $state = Get-AckiWorkflowState

    Invoke-GitCommit -Message ("workflow: epic {0} story {1}" -f $state.CurrentEpic,$state.CurrentStory)

} -ContinueOnError

Invoke-Step "Git Push" {

    Invoke-GitPush

} -ContinueOnError

Show-WorkflowSummary

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host " ACKIOS END CHAT COMPLETED" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Workflow state saved."
Write-Host "Ready to open a new ChatGPT chat."
Write-Host ""










