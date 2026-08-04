Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyCameraController.ps1"


function Connect-AckiosGalaxyCameraEventBridge {

    param(

        [object]$EventBus,

        [object]$CameraController

    )


    if(
        !($EventBus | Get-Member -Name CameraHandlers)
    ){

        $EventBus |
        Add-Member `
        -MemberType NoteProperty `
        -Name CameraHandlers `
        -Value @{}

    }


    $EventBus.CameraHandlers["CameraFocus"] =
    {
        param($Event)


        return Start-AckiosGalaxyCameraFocus `
            $CameraController `
            $Event.Payload.NodeId `
            $Event.Payload.Camera

    }


    return $EventBus

}



function Invoke-AckiosGalaxyCameraEvent {

    param(

        [object]$EventBus,

        [object]$Event

    )


    if(
        $EventBus.CameraHandlers.ContainsKey($Event.Name)
    ){

        return & $EventBus.CameraHandlers[$Event.Name] $Event

    }


    return $null

}

