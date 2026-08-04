Set-StrictMode -Version Latest


function New-AckiosFollowCameraTransition {

    param(
        [object]$Camera,
        [object]$Event
    )


    $transition =
        New-AckiosCameraTransition `
        $Camera `
        $Event.Data.NodeId


    return $transition

}


function Update-AckiosCameraFromEvent {

    param(
        [object]$FollowState,
        [object]$Event,
        [object]$Camera
    )


    if(
        $FollowState.Enabled -and
        $Event.Name -eq $FollowState.FollowEvent
    ){

        $Camera.FocusedNode =
            $Event.Data.NodeId


        $transition =
            New-AckiosFollowCameraTransition `
            $Camera `
            $Event


        return $transition

    }


    return $null

}
