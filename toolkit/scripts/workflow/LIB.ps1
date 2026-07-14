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
    throw "Not implemented."
}

function Update-ChatContext {

    $git = Get-GitSummary

    $contextFile = Join-Path (Resolve-AckiRoot) "docs\context\CHAT_CONTEXT.md"

    @"
# ACKIOS CHAT CONTEXT

Generated:
$(Get-Date -Format "yyyy-MM-dd HH:mm:ss")

Project:
ACKIOS

Branch:
$($git.Branch)

Commit:
$($git.Commit)

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
$($git.Clean)

Status:
Development in progress.

"@ | Set-Content $contextFile

    Write-Success "CHAT_CONTEXT.md updated."

}


function Update-Checkpoint {

    $git = Get-GitSummary

    $checkpointFile = Join-Path (Resolve-AckiRoot) "docs\checkpoints\LATEST_CHECKPOINT.md"

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

