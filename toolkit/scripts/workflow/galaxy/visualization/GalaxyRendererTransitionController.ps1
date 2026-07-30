Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyRendererTransitionEngine.ps1"


function New-AckiosGalaxyRendererTransitionController {

    param(

        [object]$RendererState

    )


    return [pscustomobject]@{

        RendererState =
            $RendererState

        CurrentTransition =
            $null

        Status =
            "READY"

        UpdatedAt =
            Get-Date

    }

}



function Start-AckiosGalaxyRendererTransition {

    param(

        [object]$Controller,

        [object]$PreviousFrame,

        [object]$TargetFrame

    )


    $Controller.CurrentTransition =
        New-AckiosGalaxyRendererTransition `
        $PreviousFrame `
        $TargetFrame


    $Controller.Status =
        "TRANSITION"


    $Controller.UpdatedAt =
        Get-Date


    return $Controller

}



function Update-AckiosGalaxyRendererTransitionController {

    param(

        [object]$Controller,

        [int]$Progress

    )


    if(
        $null -eq $Controller.CurrentTransition
    ){

        return $Controller

    }


    $Controller.CurrentTransition =
        Update-AckiosGalaxyRendererTransition `
        $Controller.CurrentTransition `
        $Progress


    if(
        $Controller.CurrentTransition.State -eq "COMPLETED"
    ){

        $Controller.Status =
            "READY"

    }


    $Controller.UpdatedAt =
        Get-Date


    return $Controller

}

