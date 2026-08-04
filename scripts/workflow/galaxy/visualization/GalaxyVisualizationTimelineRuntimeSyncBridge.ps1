Set-StrictMode -Version Latest


function New-AckiosGalaxyVisualizationTimelineRuntimeSyncBridge {

    param(

        [object]$TimelineSynchronizer,

        [object]$Orchestrator

    )


    return [pscustomobject]@{

        TimelineSynchronizer =
            $TimelineSynchronizer

        Orchestrator =
            $Orchestrator

        RuntimeState =
            $null

        Status =
            "READY"

        UpdatedAt =
            Get-Date

    }

}



function Sync-AckiosGalaxyVisualizationTimelineRuntime {

    param(

        [object]$Bridge

    )


    $State =
        Get-AckiosGalaxyVisualizationTimelineState `
        $Bridge.TimelineSynchronizer


    $Bridge.RuntimeState =
        [pscustomobject]@{

            TimelineIndex =
                $State.TimelineIndex

            Node =
                $State.Node

            Renderer =
                $State.Renderer

            Camera =
                $State.Camera

            AppliedAt =
                Get-Date

        }


    $Bridge.Status =
        "SYNCED"


    $Bridge.UpdatedAt =
        Get-Date


    return $Bridge

}



function Get-AckiosGalaxyVisualizationTimelineRuntimeState {

    param(

        [object]$Bridge

    )


    return $Bridge.RuntimeState

}

