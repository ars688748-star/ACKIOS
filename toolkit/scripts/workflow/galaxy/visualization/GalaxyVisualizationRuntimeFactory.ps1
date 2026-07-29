Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyVisualizationRuntimeState.ps1"


function New-AckiosGalaxyVisualizationRuntimeState {

    param(

        [object]$Galaxy,

        [object[]]$Renderer,

        [object[]]$Animation,

        [object]$Camera,

        [object]$Timeline,

        [object]$Health

    )


    $state =
        [GalaxyVisualizationRuntimeState]::new()


    $state.Galaxy =
        $Galaxy


    $state.Renderer =
        @($Renderer)


    $state.Animation =
        @($Animation)


    $state.Camera =
        $Camera


    $state.Timeline =
        $Timeline


    $state.Health =
        $Health


    $state.Timestamp =
        Get-Date


    return $state

}

