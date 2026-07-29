Set-StrictMode -Version Latest


function Restore-AckiosGalaxyRuntimeSnapshot {

    param(
        [object]$Snapshot
    )


    $restore = [pscustomobject]@{

        GalaxyState =
            $Snapshot.GalaxyState

        RendererStates =
            $Snapshot.RendererStates

        AnimationState =
            $Snapshot.AnimationState

        CameraState =
            $Snapshot.CameraState

        TimelineState =
            $Snapshot.TimelineState

        RestoredAt =
            Get-Date

    }


    return $restore

}
