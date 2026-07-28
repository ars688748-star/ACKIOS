function Get-BrainWorkingMemory {

    return (Get-BrainState).WorkingMemory

}

function Clear-BrainWorkingMemory {

    (Get-BrainState).WorkingMemory.Clear()

}

function Set-BrainWorkingMemoryValue {

    param(
        [Parameter(Mandatory)]
        [string]$Key,

        [Parameter(Mandatory)]
        $Value
    )

    (Get-BrainState).WorkingMemory[$Key] = $Value

}

function Get-BrainWorkingMemoryValue {

    param(
        [Parameter(Mandatory)]
        [string]$Key
    )

    return (Get-BrainState).WorkingMemory[$Key]

}

function Initialize-BrainWorkingMemory {

    (Get-BrainState).WorkingMemory = @{}

}
