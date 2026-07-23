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

$steps += Invoke-Step "Save Workflow State" {

    Update-AckiWorkflowState {

        param($state)

        $state.Timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

    } | Out-Null

    if (Test-Roadmap) {

        Update-RoadmapFromWorkflowState

    }

}

$steps += Invoke-Step "Update Chat Context" {

    Update-ChatContext

}

$steps += Invoke-Step "Update Checkpoint" {

    Update-Checkpoint

}



$executionReport = New-WorkflowExecutionReport -Steps $steps

$steps += Invoke-Step "Finalize Workflow Execution History" {

    $lastExecution = Get-LastWorkflowExecution

    if ($lastExecution) {

        Update-WorkflowExecutionRecord `
            -Id $lastExecution.Id `
            -Status "COMPLETED" `
            -Duration $executionReport.Duration

    }

}

$steps += Invoke-Step "Generate Start Chat Prompt" {

    Generate-StartChatPrompt

}

$steps += Invoke-Step "Repository Boundary" {

    $boundary = Test-RepositoryBoundary

    if (-not $boundary.SafeToPublish) {

        Write-Warning "Repository Boundary violations detected:"

        $boundary.Violations |
            Format-Table Path,Type,Rule -AutoSize

        Write-Warning "Repository is not ready for release. END_RELEASE will refuse publication until these violations are resolved."

    }

} -ContinueOnError

$steps += Invoke-Step "Git Add" {

    Invoke-GitAdd

}

$steps += Invoke-Step "Git Commit" {

    $state = Get-AckiWorkflowState

    Invoke-GitCommit -Message ("workflow: epic {0} story {1}" -f $state.CurrentEpic,$state.CurrentStory)

} -ContinueOnError

$steps += Invoke-Step "Git Push" {

    Invoke-GitPush

} -ContinueOnError




$steps += Invoke-Step "Generate Workflow Dashboard Report" {

    $dashboard = Get-WorkflowExecutionDashboard

    $dashboardReport = New-WorkflowDashboardReport $dashboard

    Save-WorkflowDashboardReport $dashboardReport | Out-Null

}

$health = New-WorkflowHealth

Show-WorkflowSummary `
    -ExecutionReport $executionReport `
    -Health $health

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host " ACKIOS END CHAT COMPLETED" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Workflow state saved."
Write-Host "Ready to open a new ChatGPT chat."
Write-Host ""












