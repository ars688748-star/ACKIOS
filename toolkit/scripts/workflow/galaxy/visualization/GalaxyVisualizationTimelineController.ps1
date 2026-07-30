Set-StrictMode -Version Latest


function New-AckiosGalaxyVisualizationTimelineController {

    param(

        [object]$TimelineRenderer

    )


    return [pscustomobject]@{

        Renderer =
            $TimelineRenderer

        CurrentIndex =
            0

        ActiveTimeline =
            @()

        State =
            "READY"

        UpdatedAt =
            Get-Date

    }

}



function Initialize-AckiosGalaxyVisualizationTimelineController {

    param(

        [object]$Controller

    )


    $Controller.ActiveTimeline =
        Get-AckiosGalaxyVisualizationTimelineView `
        $Controller.Renderer


    $Controller.UpdatedAt =
        Get-Date


    return $Controller

}



function Move-AckiosGalaxyVisualizationTimeline {

    param(

        [object]$Controller,

        [int]$Index

    )


    if(
        $Index -lt 0
    ){

        $Index = 0

    }


    if(
        $Index -ge $Controller.ActiveTimeline.Nodes.Count
    ){

        $Index =
            $Controller.ActiveTimeline.Nodes.Count - 1

    }


    $Controller.CurrentIndex =
        $Index


    $Controller.State =
        "POSITION_CHANGED"


    $Controller.UpdatedAt =
        Get-Date


    return $Controller

}



function Get-AckiosGalaxyVisualizationTimelinePosition {

    param(

        [object]$Controller

    )


    return [pscustomobject]@{

        Index =
            $Controller.CurrentIndex

        Node =
            $Controller.ActiveTimeline.Nodes[
                $Controller.CurrentIndex
            ]

        UpdatedAt =
            $Controller.UpdatedAt

    }

}

