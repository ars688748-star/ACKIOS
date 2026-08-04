Set-StrictMode -Version Latest


function New-AckiosGalaxyRuntimeSnapshot {

    param(
        [object]$GalaxyState,
        [object[]]$RendererStates,
        [object]$AnimationState,
        [object]$CameraState,
        [object]$TimelineState
    )


    $snapshot =
        [GalaxyRuntimeSnapshot]::new()


    $snapshot.GalaxyState =
        $GalaxyState


    $snapshot.RendererStates =
        $RendererStates


    $snapshot.AnimationState =
        $AnimationState


    $snapshot.CameraState =
        $CameraState


    $snapshot.TimelineState =
        $TimelineState


    $snapshot.Timestamp =
        Get-Date


    return $snapshot

}
