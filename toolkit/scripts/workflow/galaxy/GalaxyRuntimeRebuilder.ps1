Set-StrictMode -Version Latest


function Rebuild-AckiosGalaxyRuntimeObjects {

    param(
        [object]$RuntimeState
    )


    $cameraState =
        $RuntimeState.CameraState


    $camera =
        [pscustomobject]@{

            PositionX =
                $cameraState.PositionX

            PositionY =
                $cameraState.PositionY

            PositionZ =
                $cameraState.PositionZ

            Zoom =
                $cameraState.Zoom

            FocusedNode =
                $cameraState.FocusedNode

            Timestamp =
                Get-Date

        }


    $frames =
        $RuntimeState.AnimationState


    $rendererStates =
        $RuntimeState.RendererStates


    return [pscustomobject]@{

        Camera =
            $camera

        Frames =
            $frames

        RendererStates =
            $rendererStates

        RebuiltAt =
            Get-Date

    }

}
