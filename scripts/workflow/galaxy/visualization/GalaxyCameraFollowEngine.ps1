Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyCameraFollowState.ps1"


function Enable-AckiosCameraFollow {

    param(
        [string]$NodeId,
        [string]$EventName
    )


    $state =
        [GalaxyCameraFollowState]::new()


    $state.Enabled = $true

    $state.FollowNode = $NodeId

    $state.FollowEvent = $EventName

    $state.LastUpdate = Get-Date


    return $state

}



function Update-AckiosCameraFollow {

    param(
        [object]$State,
        [object]$Event
    )


    if($State.Enabled){

        if($Event.Name -eq $State.FollowEvent){

            $State.FollowNode =
                $Event.Data.NodeId

            $State.LastUpdate =
                Get-Date

        }

    }


    return $State

}



function Disable-AckiosCameraFollow {

    param(
        [object]$State
    )


    $State.Enabled = $false


    return $State

}
