Set-StrictMode -Version Latest

$ErrorActionPreference = "Stop"

. (Join-Path $PSScriptRoot "..\repository\Repository.Core.ps1")

. "$PSScriptRoot\..\lib\Common.ps1"
. "$PSScriptRoot\..\lib\Path.ps1"
. "$PSScriptRoot\..\lib\Project.ps1"

. "$PSScriptRoot\..\repository\Repository.Core.ps1"

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
        [scriptblock]$Action,

        [switch]$ContinueOnError

    )

    Write-Host ""
    Write-Host ">>> $Name"

    try {

        $result = & $Action

        if ($LASTEXITCODE -ne 0) {
            throw "$Name failed."
        }

        if ($result -eq $false) {
            throw "$Name returned failure."
        }

        Write-Success "$Name completed."

        return

    }
    catch {

        if ($ContinueOnError) {

            Write-WarningMessage $_.Exception.Message

            return

        }

        Write-ErrorMessage $_.Exception.Message
        throw

    }

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







