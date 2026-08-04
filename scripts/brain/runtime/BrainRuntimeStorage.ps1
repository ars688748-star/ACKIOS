function Set-BrainRuntimeContext
{
    param(
        [Parameter(Mandatory)]
        $Context
    )

    (Get-BrainState).Runtime = $Context
}

function Get-BrainRuntimeContext
{
    return (Get-BrainState).Runtime
}

function Clear-BrainRuntimeContext
{
    (Get-BrainState).Runtime = $null
}
