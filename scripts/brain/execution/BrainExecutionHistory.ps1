function Add-BrainExecutionResult
{
    param(
        [Parameter(Mandatory)]
        $Result
    )

    [void](Get-BrainState).ExecutionHistory.Add($Result)
}

function Get-BrainExecutionHistory
{
    return (Get-BrainState).ExecutionHistory
}

function Clear-BrainExecutionHistory
{
    (Get-BrainState).ExecutionHistory.Clear()
}
