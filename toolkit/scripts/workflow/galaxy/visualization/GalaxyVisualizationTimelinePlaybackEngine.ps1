Set-StrictMode -Version Latest


function New-AckiosGalaxyVisualizationTimelinePlaybackEngine {

    param(

        [object]$TimelineController

    )


    return [pscustomobject]@{

        Controller =
            $TimelineController

        Status =
            "STOPPED"

        Speed =
            1

        UpdatedAt =
            Get-Date

    }

}



function Start-AckiosGalaxyVisualizationTimelinePlayback {

    param(

        [object]$Playback

    )


    $Playback.Status =
        "PLAYING"


    $Playback.UpdatedAt =
        Get-Date


    return $Playback

}



function Stop-AckiosGalaxyVisualizationTimelinePlayback {

    param(

        [object]$Playback

    )


    $Playback.Status =
        "STOPPED"


    $Playback.UpdatedAt =
        Get-Date


    return $Playback

}



function Set-AckiosGalaxyVisualizationTimelinePlaybackSpeed {

    param(

        [object]$Playback,

        [int]$Speed

    )


    if(
        $Speed -lt 1
    ){

        $Speed = 1

    }


    $Playback.Speed =
        $Speed


    $Playback.UpdatedAt =
        Get-Date


    return $Playback

}



function Invoke-AckiosGalaxyVisualizationTimelinePlaybackStep {

    param(

        [object]$Playback

    )


    $Current =
        $Playback.Controller.CurrentIndex


    $Next =
        $Current + 1


    $Playback.Controller =
        Move-AckiosGalaxyVisualizationTimeline `
        $Playback.Controller `
        $Next


    return $Playback

}

