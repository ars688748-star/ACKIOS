$ExecutionHistoryPath = Join-Path `
    $PSScriptRoot "..\storage\executions\HISTORY.json"


function New-WorkflowExecutionRecord {

    param(
        [string]$Branch,
        [string]$Commit,
        [string]$Epic,
        [string]$Story,
        [string]$Build,
        [string]$Tests,
        [string]$Status
    )

    return [PSCustomObject]@{
        Id        = [guid]::NewGuid().ToString()
        Timestamp = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")

        Branch    = $Branch
        Commit    = $Commit

        Epic      = $Epic
        Story     = $Story

        Build     = $Build
        Tests     = $Tests

        Status    = $Status
    }
}


function Save-WorkflowExecutionRecord {

    param(
        [object]$Record
    )

    $directory = Split-Path $ExecutionHistoryPath

    if (!(Test-Path $directory)) {
        New-Item -ItemType Directory -Force $directory | Out-Null
    }


    if (Test-Path $ExecutionHistoryPath) {

        $history = Get-Content `
            $ExecutionHistoryPath `
            -Raw | ConvertFrom-Json

    }
    else {

        $history = @()

    }


    $history += $Record


    $history |
        ConvertTo-Json -Depth 5 |
        Set-Content $ExecutionHistoryPath
}


function Get-WorkflowExecutionHistory {

    if (!(Test-Path $ExecutionHistoryPath)) {
        return @()
    }


    return Get-Content `
        $ExecutionHistoryPath `
        -Raw |
        ConvertFrom-Json
}


function Get-LastWorkflowExecution {

    $history = Get-WorkflowExecutionHistory

    if ($history.Count -eq 0) {
        return $null
    }


    return $history[-1]
}
function Update-WorkflowExecutionRecord {

    param(
        [string]$Id,
        [string]$Status,
        [string]$Duration
    )

    if (!(Test-Path $ExecutionHistoryPath)) {
        return
    }


    $history = Get-Content `
        $ExecutionHistoryPath `
        -Raw |
        ConvertFrom-Json


    foreach ($item in $history) {

        if ($item.Id -eq $Id) {

            $item.Status = $Status
            $item | Add-Member `
                -MemberType NoteProperty `
                -Name Duration `
                -Value $Duration `
                -Force
            $item | Add-Member -MemberType NoteProperty -Name CompletedAt -Value (Get-Date).ToString("yyyy-MM-dd HH:mm:ss") -Force

        }
    }


    $history |
        ConvertTo-Json -Depth 5 |
        Set-Content $ExecutionHistoryPath
}




