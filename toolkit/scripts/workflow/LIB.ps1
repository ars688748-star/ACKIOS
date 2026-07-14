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
