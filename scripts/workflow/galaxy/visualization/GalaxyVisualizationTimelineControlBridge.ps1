Set-StrictMode -Version Latest


function New-AckiosGalaxyVisualizationTimelineControlBridge {

    param(

        [object]$ControlPlane,

        [object]$PlaybackEngine

    )


    return [pscustomobject]@{

        ControlPlane =
            $ControlPlane

        PlaybackEngine =
            $PlaybackEngine

        State =
            "READY"

        UpdatedAt =
            Get-Date

    }

}



function Invoke-AckiosGalaxyVisualizationTimelineCommand {

    param(

        [object]$Bridge,

        [string]$Command

    )


    switch($Command){

        "PLAY" {

            $Bridge.PlaybackEngine =
                Start-AckiosGalaxyVisualizationTimelinePlayback `
                $Bridge.PlaybackEngine

        }


        "STOP" {

            $Bridge.PlaybackEngine =
                Stop-AckiosGalaxyVisualizationTimelinePlayback `
                $Bridge.PlaybackEngine

        }


        "STEP" {

            $Bridge.PlaybackEngine =
                Invoke-AckiosGalaxyVisualizationTimelinePlaybackStep `
                $Bridge.PlaybackEngine

        }

    }


    $Bridge.State =
        "UPDATED"


    $Bridge.UpdatedAt =
        Get-Date


    return $Bridge

}

