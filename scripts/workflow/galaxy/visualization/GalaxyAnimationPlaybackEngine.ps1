Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyAnimationPlayback.ps1"


function New-AckiosAnimationPlayback {

    param(
        [object]$Transition,
        [object[]]$Frames
    )


    $playback = [GalaxyAnimationPlayback]::new()


    $playback.NodeId = $Transition.NodeId

    $playback.Frames = $Frames

    $playback.Duration = $Frames.Count * 200

    $playback.StartedAt = Get-Date


    return $playback

}


function Start-AckiosAnimationPlayback {

    param(
        [object]$Playback
    )


    $Playback.Status = "PLAYING"

    return $Playback

}


function Complete-AckiosAnimationPlayback {

    param(
        [object]$Playback
    )


    $Playback.CurrentFrame =
        $Playback.Frames.Count - 1


    $Playback.Status = "COMPLETED"

    return $Playback

}
