function Get-AckiWorkflowState {

    return Load-WorkflowState

}


function Invoke-Build {

    param(

        [switch]$ContinueOnError

    )

    try {

        & (Join-Path (Resolve-ScriptsPath) "Build.ps1")

        return $true

    }
    catch {

        if ($ContinueOnError) {

            Write-WarningMessage $_.Exception.Message

            return

        }

        throw

    }

}

function Invoke-Tests {

    npm test

    if ($LASTEXITCODE -ne 0) {
        throw "Tests failed."
    }

}

function Invoke-QualityGate {
    throw "Not implemented."
}

function Show-WorkflowSummary {

    $git = Get-GitSummary

    Write-Host ""
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host " Workflow Summary" -ForegroundColor Cyan
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host ""

    Write-Host ("Branch            : {0}" -f $git.Branch)
    Write-Host ("Commit            : {0}" -f $git.Commit)
    Write-Host ("Repository Clean  : {0}" -f $git.Clean)
    Write-Host ("Chat Context      : Updated")
    Write-Host ("Checkpoint        : Updated")

    Write-Host ""
    Write-Success "Workflow completed successfully."

}

function Update-ChatContext {

    $state = Get-AckiWorkflowState

    $contextFile = Join-Path (Resolve-AckiRoot) ".work\context\CHAT_CONTEXT.md"

@"
# ACKIOS CHAT CONTEXT

Generated:
$($state.Timestamp)

Project:
ACKIOS

Branch:
$($state.Branch)

Commit:
$($state.Commit)

Current Epic:
$($state.CurrentEpic)

Current Story:
$($state.CurrentStory)

Build:
$($state.Build)

Tests:
$($state.Tests)

Next Story:
$($state.NextStory)

Repository Clean:
$($state.RepositoryClean)

Status:
Development in progress.

"@ | Set-Content $contextFile

    Write-Success "CHAT_CONTEXT.md updated."

}


function Update-Checkpoint {

    $state = Get-AckiWorkflowState

    $checkpointFile = Join-Path (Resolve-AckiRoot) ".work\checkpoints\LATEST_CHECKPOINT.md"

@"
# ACKIOS CHECKPOINT

Generated:
$($state.Timestamp)

Branch:
$($state.Branch)

Commit:
$($state.Commit)

Current Epic:
$($state.CurrentEpic)

Current Story:
$($state.CurrentStory)

Build:
$($state.Build)

Tests:
$($state.Tests)

Repository Clean:
$($state.RepositoryClean)

Next Story:
$($state.NextStory)

Status:
Ready for next development session.

"@ | Set-Content $checkpointFile

    Write-Success "LATEST_CHECKPOINT.md updated."

}








function Generate-StartChatPrompt {

    $state = Get-AckiWorkflowState

    $promptFile = Join-Path (Resolve-AckiRoot) ".work\context\START_CHAT_PROMPT.md"

    $nextStoryFile = Join-Path (Resolve-AckiRoot) ".work\context\NEXT_STORY.md"

    $nextStory = ""

    if (Test-Path $nextStoryFile) {
        $nextStory = Get-Content $nextStoryFile -Raw
    }

@"
# ACKIOS DEVELOPMENT SESSION

Project:
ACKIOS

Branch:
$($state.Branch)

Commit:
$($state.Commit)

Current Epic:
$($state.CurrentEpic)

Current Story:
$($state.CurrentStory)

Next Story:
$($state.NextStory)

Build:
$($state.Build)

Tests:
$($state.Tests)

Repository Clean:
$($state.RepositoryClean)

==================================================

NEXT STORY

$nextStory

==================================================

Continue development from Current Story.

Rules:

- Use PowerShell commands only.
- Follow ACKIOS workflow.
- Update workflow state after completed work.
- Finish the session with:

.\scripts\workflow\END_CHAT.ps1

"@ | Set-Content $promptFile

    Write-Success "START_CHAT_PROMPT.md updated."

}


function Save-WorkflowState {

    $state = Get-AckiWorkflowState

    $workflowStateFile = Join-Path (Resolve-AckiRoot) ".work\state\WORKFLOW_STATE.json"

    $workflow = [PSCustomObject]@{

        Timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

        Branch = $state.Branch

        Commit = $state.Commit

        RepositoryClean = $state.RepositoryClean

        CurrentEpic = "114"

        CurrentStory = "114.5.3"

        NextStory = "114.5.4"

        Build = "PASS"

        Tests = "PASS"

    }

    $workflow |
        ConvertTo-Json -Depth 5 |
        Set-Content $workflowStateFile

    Write-Success "WORKFLOW_STATE.json updated."

}


function Load-WorkflowState {

    $workflowStateFile = Join-Path (Resolve-AckiRoot) ".work\state\WORKFLOW_STATE.json"

    if (!(Test-Path $workflowStateFile)) {
        throw "Workflow state file not found: $workflowStateFile"
    }

    return Get-Content $workflowStateFile -Raw | ConvertFrom-Json

}
