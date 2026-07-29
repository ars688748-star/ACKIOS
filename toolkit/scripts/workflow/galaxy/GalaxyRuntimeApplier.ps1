Set-StrictMode -Version Latest


function Apply-AckiosGalaxyRuntimeState {

    param(
        [object]$RuntimeState
    )


    $result = [pscustomobject]@{

        GalaxyState =
            $RuntimeState.GalaxyState

        RendererStates =
            $RuntimeState.RendererStates

        AnimationState =
            $RuntimeState.AnimationState

        CameraState =
            $RuntimeState.CameraState

        TimelineState =
            $RuntimeState.TimelineState

        AppliedAt =
            Get-Date

    }


    return $result

}
