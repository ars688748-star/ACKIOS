$script:BrainExecutionHistory =
    [System.Collections.ArrayList]::new()

function Add-BrainExecutionResult
{
    param(
        [Parameter(Mandatory)]
        $Result
    )

    [void]$script:BrainExecutionHistory.Add($Result)
}

function Get-BrainExecutionHistory
{
    return $script:BrainExecutionHistory
}

function Clear-BrainExecutionHistory
{
    $script:BrainExecutionHistory.Clear()
}
