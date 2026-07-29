Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyRendererState.ps1"


function Convert-AckiosToRendererState {

    param(
        [object]$Node,
        [object]$AnimationFrame
    )


    $state =
        [GalaxyRendererNodeState]::new()


    $state.NodeId =
        $Node.Id


    $state.Label =
        $Node.Label


    $state.Category =
        $Node.Category


    $state.Status =
        $Node.Status


    $state.Size =
        $Node.Size


    $state.AnimationProgress =
        $AnimationFrame.Progress


    $state.CurrentState =
        $AnimationFrame.CurrentState


    $state.TargetState =
        $AnimationFrame.TargetState


    $state.Trigger =
        $AnimationFrame.Trigger


    $state.Timestamp =
        Get-Date


    return $state

}
