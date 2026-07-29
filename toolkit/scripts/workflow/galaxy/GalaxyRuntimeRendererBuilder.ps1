Set-StrictMode -Version Latest


function Build-AckiosRestoredRendererFrame {

    param(
        [object]$GalaxyView,
        [object]$RuntimeState
    )


    $frame =
        [GalaxyRendererFrame]::new()


    $frame.Nodes =
        $RuntimeState.RendererStates


    $frame.Edges =
        $GalaxyView.Edges


    $frame.Camera =
        @{
            Progress = 0
            FocusedNode =
                $RuntimeState.Camera.FocusedNode

            Target =
                $RuntimeState.Camera.FocusedNode
        }


    $frame.Timestamp =
        Get-Date


    return $frame

}
