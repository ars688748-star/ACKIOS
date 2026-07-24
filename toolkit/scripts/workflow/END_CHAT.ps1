Set-StrictMode -Version Latest

$ErrorActionPreference = "Stop"

. "$PSScriptRoot\Workflow.Core.ps1"

Initialize-Workflow

$completedStory = (Get-AckiWorkflowState).CurrentStory

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


$steps += Invoke-Step "Quality Gate" {

    $health = New-WorkflowHealth

    if(
        $health.QualityGate.Build -ne "PASS" -or
        $health.QualityGate.Tests -ne "PASS" -or
        $health.QualityGate.StoryCatalog -ne "PASS" -or
        $health.QualityGate.Roadmap -ne "PASS"
    ){

        Write-Host ""
        Write-Host "Quality Gate FAILED"
        Write-Host "-------------------"

        $health.QualityGate.Failures |
            ForEach-Object {
                Write-Host $_
            }

        throw "Workflow blocked by Quality Gate."

    }

    Write-Host ""
    Write-Host "Quality Gate PASSED"

}


$steps += Invoke-Step "Advance Story" {

    Advance-AckiStory | Out-Null

}


$steps += Invoke-Step "Save Advanced Workflow State" {

    Update-AckiWorkflowState {

        param($state)

        $state.Timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

    } | Out-Null


    if (Test-Roadmap) {

        Update-RoadmapFromWorkflowState

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

$steps += Invoke-Step "Refresh Workflow Commit State" {

    Update-AckiWorkflowState {

        param($state)

        $state.Timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

    } | Out-Null

}


$steps += Invoke-Step "Create Workflow Execution History" {

    $state = Get-AckiWorkflowState


    $record = New-WorkflowExecutionRecord `
        -Branch $state.Branch `
        -Commit $state.Commit `
        -Epic $state.CurrentEpic `
        -Story $completedStory `
        -Build $state.Build `
        -Tests $state.Tests `
        -Status "COMPLETED"


    $record | Add-Member `
        -MemberType NoteProperty `
        -Name Duration `
        -Value ([string]$executionReport.Duration) `
        -Force


    Save-WorkflowExecutionRecord $record

}


$steps += Invoke-Step "Git Push" {

    Invoke-GitPush

} -ContinueOnError




$steps += Invoke-Step "Generate Workflow Dashboard Report" {

    $dashboard = Get-WorkflowExecutionDashboard

    $dashboardReport = New-WorkflowDashboardReport $dashboard

    Save-WorkflowDashboardReport $dashboardReport | Out-Null

}

$steps += Invoke-Step "Generate Workflow Dashboard Export" {

    $dashboard = Get-WorkflowExecutionDashboard

    $visualization = Get-WorkflowDashboardVisualization $dashboard

    Export-WorkflowDashboardJson $visualization | Out-Null

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

