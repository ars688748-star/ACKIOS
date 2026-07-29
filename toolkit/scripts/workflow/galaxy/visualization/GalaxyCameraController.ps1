Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyCameraState.ps1"


function New-AckiosGalaxyCamera {

    param(
        [string]$FocusNode = ""
    )


    $camera =
        [GalaxyCameraState]::new()


    $camera.FocusedNode =
        $FocusNode


    return $camera

}



function Set-AckiosCameraFocus {

    param(
        [object]$Camera,
        [string]$NodeId
    )


    $Camera.FocusedNode =
        $NodeId


    return $Camera

}
