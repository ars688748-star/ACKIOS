Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyRendererState.ps1"


function Convert-AckiosNodeToStaticRendererState {

    param(
        [object]$Node
    )


    $state =
        [GalaxyRendererNodeState]::new()


    $state.NodeId =
        $Node.Id


    $state.Label =
        $Node.Name


    $state.Category =
        $Node.Type


    $state.Status =
        $Node.Status


    $state.Size = 1

    $state.AnimationProgress = 0

    $state.CurrentState = "STATIC"

    $state.TargetState = "STATIC"

    $state.Timestamp = Get-Date


    return $state

}
