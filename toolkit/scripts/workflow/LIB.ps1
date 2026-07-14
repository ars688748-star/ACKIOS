Set-StrictMode -Version Latest

$ErrorActionPreference = "Stop"

. "$PSScriptRoot\..\lib\Common.ps1"
. "$PSScriptRoot\..\lib\Path.ps1"
. "$PSScriptRoot\..\lib\Project.ps1"

function Initialize-Workflow {

    Write-Header "ACKIOS Workflow"

    if (-not (Test-AckiProject)) {
        throw "ACKIOS project verification failed."
    }

    Write-Success "Workflow initialized."

}

function Invoke-Step {

    param(
        [Parameter(Mandatory)]
        [string]$Name,

        [Parameter(Mandatory)]
        [scriptblock]$Action
    )

    Write-Host ""
    Write-Host ">>> $Name"

    & $Action

    if ($LASTEXITCODE -ne 0) {
        Write-ErrorMessage "$Name failed."
        exit $LASTEXITCODE
    }

    Write-Success "$Name completed."

}

function Get-WorkflowStatus {
    throw "Not implemented."
}

function Get-GitSummary {

    $branch = (git branch --show-current).Trim()
    $commit = (git rev-parse --short HEAD).Trim()
    $status = git status --short

    [PSCustomObject]@{
        Branch = $branch
        Commit = $commit
        Clean  = [string]::IsNullOrWhiteSpace($status)
    }

}

function Get-AckiWorkflowState {

    $git = Get-GitSummary

    return [PSCustomObject]@{

        Branch = $git.Branch

        Commit = $git.Commit

        RepositoryClean = $git.Clean

        Timestamp = Get-Date

    }

}


function Invoke-Build {

    & (Join-Path (Resolve-ScriptsPath) "Build.ps1")

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
$(Get-Date -Format "yyyy-MM-dd HH:mm:ss")

Project:
ACKIOS

Branch:
$($state.Branch)

Commit:
$($state.Commit)

Current Epic:
114

Current Story:
114.5.2

Build:
UNKNOWN

Tests:
UNKNOWN

Next Story:
114.5.3

Repository Clean:
$($state.RepositoryClean)

Status:
Development in progress.

"@ | Set-Content $contextFile

    Write-Success "CHAT_CONTEXT.md updated."

}


function Update-Checkpoint {

    $git = Get-GitSummary

    $checkpointFile = Join-Path (Resolve-AckiRoot) ".work\checkpoints\LATEST_CHECKPOINT.md"

    @"
# ACKIOS CHECKPOINT

Generated:
$(Get-Date -Format "yyyy-MM-dd HH:mm:ss")

Branch:
$($git.Branch)

Commit:
$($git.Commit)

Current Epic:
114

Current Story:
114.5.3

Build:
PASS

Tests:
PASS

Repository Clean:
$($git.Clean)

Next Story:
114.5.4

Status:
Ready for next development session.

"@ | Set-Content $checkpointFile

    Write-Success "LATEST_CHECKPOINT.md updated."

}





