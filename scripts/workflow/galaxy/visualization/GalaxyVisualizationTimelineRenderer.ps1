Set-StrictMode -Version Latest


function New-AckiosGalaxyVisualizationTimelineRenderer {

    param(

        [object]$TimelineEngine

    )


    return [pscustomobject]@{

        TimelineEngine =
            $TimelineEngine

        Nodes =
            @()

        Edges =
            @()

        State =
            "READY"

        UpdatedAt =
            Get-Date

    }

}



function Build-AckiosGalaxyVisualizationTimelineView {

    param(

        [object]$Renderer

    )


    $Nodes =
        @()


    $Edges =
        @()


    foreach($Item in $Renderer.TimelineEngine.Timeline){

        $Node =
            [pscustomobject]@{

                Type =
                    $Item.Type

                Timestamp =
                    $Item.Timestamp

                Data =
                    $Item.Data

            }


        $Nodes +=
            $Node

    }


    for(
        $Index = 0;
        $Index -lt ($Nodes.Count - 1);
        $Index++
    ){

        $Edges +=
            [pscustomobject]@{

                From =
                    $Nodes[$Index]

                To =
                    $Nodes[$Index + 1]

            }

    }


    $Renderer.Nodes =
        $Nodes

    $Renderer.Edges =
        $Edges

    $Renderer.State =
        "BUILT"

    $Renderer.UpdatedAt =
        Get-Date


    return $Renderer

}



function Get-AckiosGalaxyVisualizationTimelineView {

    param(

        [object]$Renderer

    )


    return [pscustomobject]@{

        Nodes =
            $Renderer.Nodes

        Edges =
            $Renderer.Edges

        GeneratedAt =
            Get-Date

    }

}

