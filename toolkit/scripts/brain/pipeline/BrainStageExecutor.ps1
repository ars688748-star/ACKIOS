function Invoke-BrainStage {

    param(
        [Parameter(Mandatory)]
        [string]$Name,

        [Parameter(Mandatory)]
        [scriptblock]$Action
    )

    $result = & $Action

    Set-BrainWorkingMemoryValue `
        -Key $Name `
        -Value $result

    return $result
}
