Set-StrictMode -Version Latest


function Process-AckiosCameraFollowEvent {

    param(
        [object]$FollowState,
        [object]$Event,
        [object]$Camera
    )


    if(-not $FollowState.Enabled){

        return $Camera

    }


    if($Event.Name -eq $FollowState.FollowEvent){

        $Camera.FocusedNode =
            $FollowState.FollowNode

    }


    return $Camera

}
