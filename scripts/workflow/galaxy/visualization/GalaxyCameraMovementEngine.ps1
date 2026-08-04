Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyCameraTransition.ps1"


function New-AckiosCameraTransition {

    param(
        [object]$Camera,
        [string]$TargetNode
    )


    $transition =
        [GalaxyCameraTransition]::new()


    $transition.StartX =
        $Camera.PositionX

    $transition.StartY =
        $Camera.PositionY

    $transition.StartZ =
        $Camera.PositionZ


    $transition.EndX = 0
    $transition.EndY = 0
    $transition.EndZ = 20


    $transition.TargetNode =
        $TargetNode


    return $transition

}



function Update-AckiosCameraTransition {

    param(
        [object]$Transition,
        [int]$Progress
    )


    $Transition.Progress =
        $Progress


    return $Transition

}


function Get-AckiosCameraPosition {

    param(
        [object]$Transition
    )


    $SmoothProgress = Get-AckiosSmoothProgress `
        $Transition.Progress


    $ratio =
        $SmoothProgress / 100


    $z =
        $Transition.StartZ +
        (($Transition.EndZ - $Transition.StartZ) * $ratio)


    return @{
        X = $Transition.StartX
        Y = $Transition.StartY
        Z = $z
    }

}


