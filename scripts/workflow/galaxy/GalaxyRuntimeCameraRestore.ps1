Set-StrictMode -Version Latest


function Restore-AckiosCameraFromRuntimeState {

    param(
        [object]$CameraState
    )


    $camera =
        New-AckiosGalaxyCamera `
        $CameraState.FocusedNode


    $camera.PositionX =
        $CameraState.PositionX

    $camera.PositionY =
        $CameraState.PositionY

    $camera.PositionZ =
        $CameraState.PositionZ

    $camera.Zoom =
        $CameraState.Zoom


    return $camera

}
