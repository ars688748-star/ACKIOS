Set-StrictMode -Version Latest


function New-AckiosGalaxyVisualizationArchitectureGraphBridge {

    param(

        [object]$ArchitectureGraph,

        [object]$UnifiedState

    )


    return [pscustomobject]@{

        ArchitectureGraph =
            $ArchitectureGraph

        UnifiedState =
            $UnifiedState

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



function Import-AckiosGalaxyVisualizationArchitectureGraph {

    param(

        [object]$Bridge,

        [object]$Graph

    )


    $Bridge.ArchitectureGraph =
        $Graph


    if($null -ne $Graph.Nodes){

        $Bridge.Nodes =
            $Graph.Nodes

    }


    if($null -ne $Graph.Edges){

        $Bridge.Edges =
            $Graph.Edges

    }


    $Bridge.State =
        "IMPORTED"


    $Bridge.UpdatedAt =
        Get-Date


    return $Bridge

}



function Get-AckiosGalaxyVisualizationArchitectureGraphState {

    param(

        [object]$Bridge

    )


    return [pscustomobject]@{

        State =
            $Bridge.State

        Nodes =
            $Bridge.Nodes

        Edges =
            $Bridge.Edges

        UpdatedAt =
            $Bridge.UpdatedAt

    }

}

