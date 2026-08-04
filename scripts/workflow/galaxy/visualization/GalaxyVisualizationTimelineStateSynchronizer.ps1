Set-StrictMode -Version Latest


function New-AckiosGalaxyVisualizationTimelineStateSynchronizer {

    param(

        [object]$TimelineController,

        [object]$RendererState,

        [object]$CameraController

    )


    return [pscustomobject]@{

        TimelineController =
            $TimelineController

        RendererState =
            $RendererState

        CameraController =
            $CameraController

        CurrentState =
            $null

        Status =
            "READY"

        UpdatedAt =
            Get-Date

    }

}



function Sync-AckiosGalaxyVisualizationTimelineState {

    param(

        [object]$Synchronizer

    )


    $Position =
        Get-AckiosGalaxyVisualizationTimelinePosition `
        $Synchronizer.TimelineController


    $Synchronizer.CurrentState =
        [pscustomobject]@{

            TimelineIndex =
                $Position.Index

            Node =
                $Position.Node

            Renderer =
                $Synchronizer.RendererState

            Camera =
                $Synchronizer.CameraController

            SyncedAt =
                Get-Date

        }


    $Synchronizer.Status =
        "SYNCED"


    $Synchronizer.UpdatedAt =
        Get-Date


    return $Synchronizer

}



function Get-AckiosGalaxyVisualizationTimelineState {

    param(

        [object]$Synchronizer

    )


    return $Synchronizer.CurrentState

}

