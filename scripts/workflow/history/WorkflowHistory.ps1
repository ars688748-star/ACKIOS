Set-StrictMode -Version Latest

$WorkflowHistoryPath = Join-Path $PSScriptRoot "..\..\..\.work\history\WORKFLOW_HISTORY.json"

function Get-WorkflowHistoryPath {
    return $WorkflowHistoryPath
}

function Test-WorkflowHistory {

    Test-Path (Get-WorkflowHistoryPath)

}

function Initialize-WorkflowHistory {

    $path = Get-WorkflowHistoryPath

    $directory = Split-Path $path

    if(-not (Test-Path $directory)){
        New-Item -ItemType Directory -Force $directory | Out-Null
    }

    if(-not (Test-Path $path)){
        @() |
            ConvertTo-Json |
            Set-Content $path -Encoding UTF8
    }

}

function Add-WorkflowHistoryEntry {

    param(
        [WorkflowDecisionResult]$Decision
    )

    Initialize-WorkflowHistory

    $path = Get-WorkflowHistoryPath

    $history = Get-Content $path -Raw | ConvertFrom-Json

    if($null -eq $history){
        $history = @()
    }

    $entry = [PSCustomObject]@{

        Timestamp       = Get-Date
        Status          = $Decision.Status
        Decision        = $Decision.Decision
        WinningRule     = $Decision.WinningRule
        TotalDurationMs = $Decision.TotalDurationMs
        ExecutedRules   = $Decision.ExecutedRules.Count

    }

    @($history) + $entry |
        ConvertTo-Json -Depth 10 |
        Set-Content $path -Encoding UTF8

}

function Get-WorkflowHistory {

    Initialize-WorkflowHistory

    Get-Content `
        (Get-WorkflowHistoryPath) `
        -Raw |
    ConvertFrom-Json

}

