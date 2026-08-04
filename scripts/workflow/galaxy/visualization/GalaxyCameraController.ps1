Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyCameraAnimationEngine.ps1"


function New-AckiosGalaxyCameraController {

    param(

        [object]$Camera

    )


    return [pscustomobject]@{

        Camera =
            $Camera

        FocusNode =
            $null

        ActiveTransition =
            $null

        State =
            "READY"

        UpdatedAt =
            Get-Date

    }

}



function Start-AckiosGalaxyCameraFocus {

    param(

        [object]$Controller,

        [string]$NodeId,

        [object]$TargetCamera

    )


    $Controller.FocusNode =
        $NodeId


    $Controller.ActiveTransition =
        New-AckiosGalaxyCameraTransition `
        $Controller.Camera `
        $TargetCamera


    $Controller.State =
        "MOVING"


    $Controller.UpdatedAt =
        Get-Date


    return $Controller

}



function Update-AckiosGalaxyCameraController {

    param(

        [object]$Controller,

        [int]$Progress

    )


    if(
        $null -eq $Controller.ActiveTransition
    ){

        return $Controller

    }


    $Controller.ActiveTransition =
        Update-AckiosGalaxyCameraTransition `
        $Controller.ActiveTransition `
        $Progress


    if(
        $Controller.ActiveTransition.State -eq "COMPLETED"
    ){

        $Controller.State =
            "READY"

        $Controller.Camera =
            $Controller.ActiveTransition.TargetCamera

    }


    $Controller.UpdatedAt =
        Get-Date


    return $Controller

}

