function Test-WorkflowBrain {

    $brainCore = Join-Path $PSScriptRoot "..\..\brain\Brain.Core.ps1"

    if (-not (Get-Command Test-Brain -ErrorAction SilentlyContinue)) {

        if (Test-Path $brainCore) {
            . $brainCore
        }
        else {
            throw "Brain.Core.ps1 not found."
        }

    }

    return Test-Brain

}

