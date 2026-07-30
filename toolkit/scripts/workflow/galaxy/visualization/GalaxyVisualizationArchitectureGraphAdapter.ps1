Set-StrictMode -Version Latest


function New-AckiosGalaxyVisualizationArchitectureGraphAdapter {

    param(

        [object]$ArchitectureGraph

    )


    return [pscustomobject]@{

        SourceGraph =
            $ArchitectureGraph

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



function Convert-AckiosArchitectureGraphToGalaxyNodes {

    param(

        [object]$Adapter

    )


    $GalaxyNodes = @()


    foreach($Node in $Adapter.SourceGraph.Nodes){

        $GalaxyNodes +=
            [pscustomobject]@{

                Id =
                    $Node.Id

                Type =
                    $Node.Type

                Position =
                    [pscustomobject]@{

                        X = 0

                        Y = 0

                        Z = 0

                    }

            }

    }


    $Adapter.Nodes =
        $GalaxyNodes


    $Adapter.State =
        "NODES_IMPORTED"

    $Adapter.UpdatedAt =
        Get-Date


    return $Adapter

}



function Convert-AckiosArchitectureGraphToGalaxyEdges {

    param(

        [object]$Adapter

    )


    $GalaxyEdges = @()


    foreach($Edge in $Adapter.SourceGraph.Edges){

        $GalaxyEdges +=
            [pscustomobject]@{

                From =
                    $Edge.From

                To =
                    $Edge.To

            }

    }


    $Adapter.Edges =
        $GalaxyEdges


    $Adapter.State =
        "GRAPH_IMPORTED"

    $Adapter.UpdatedAt =
        Get-Date


    return $Adapter

}



function Get-AckiosGalaxyVisualizationArchitectureGraphAdapterState {

    param(

        [object]$Adapter

    )


    return [pscustomobject]@{

        State =
            $Adapter.State

        Nodes =
            $Adapter.Nodes

        Edges =
            $Adapter.Edges

        UpdatedAt =
            $Adapter.UpdatedAt

    }

}

