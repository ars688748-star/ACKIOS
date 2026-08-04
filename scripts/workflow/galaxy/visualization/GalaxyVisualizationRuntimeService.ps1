Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyVisualizationRuntimeFactory.ps1"


function Get-AckiosGalaxyVisualizationRuntime {

    param(

        [object]$Galaxy,

        [object[]]$Renderer,

        [object[]]$Animation,

        [object]$Camera,

        [object]$Timeline,

        [object]$Health

    )


    return New-AckiosGalaxyVisualizationRuntimeState `
        -Galaxy $Galaxy `
        -Renderer $Renderer `
        -Animation $Animation `
        -Camera $Camera `
        -Timeline $Timeline `
        -Health $Health

}

