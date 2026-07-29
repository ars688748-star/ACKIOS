Set-StrictMode -Version Latest


function Update-AckiosRendererCameraState {

    param(
        [object]$RendererFrame,
        [object]$Camera,
        [object]$Transition
    )


    $RendererFrame.Camera =
        @{
            FocusedNode = $Camera.FocusedNode
            Progress = $Transition.Progress
            Target = $Transition.TargetNode
        }


    return $RendererFrame

}
