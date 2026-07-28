function Get-WorkingMemorySnapshot {

    return Get-BrainWorkingMemory

}

function Get-WorkingMemoryItem {

    param(
        [Parameter(Mandatory)]
        [string]$Name
    )

    return Get-BrainWorkingMemoryValue $Name

}

function Set-WorkingMemoryItem {

    param(
        [Parameter(Mandatory)]
        [string]$Name,

        [Parameter(Mandatory)]
        $Value
    )

    Set-BrainWorkingMemoryValue `
        -Key $Name `
        -Value $Value

}

function Clear-WorkingMemory {

    Clear-BrainWorkingMemory

}
