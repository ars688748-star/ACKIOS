$script:BrainRuntime = $null

function Set-BrainRuntimeContext
{
    param(
        [Parameter(Mandatory)]
        $Context
    )

    $script:BrainRuntime = $Context
}

function Get-BrainRuntimeContext
{
    return $script:BrainRuntime
}

function Clear-BrainRuntimeContext
{
    $script:BrainRuntime = $null
}
