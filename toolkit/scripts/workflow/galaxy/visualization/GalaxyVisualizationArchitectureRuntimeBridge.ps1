Set-StrictMode -Version Latest


function New-AckiosGalaxyVisualizationArchitectureRuntimeBridge {

    param(

        [object]$GalaxyUnifiedState,

        [object]$ArchitectureBridge,

        [object]$ArchitectureAdapter

    )


    return [pscustomobject]@{

        UnifiedState =
            $GalaxyUnifiedState

        ArchitectureBridge =
            $ArchitectureBridge

        ArchitectureAdapter =
            $ArchitectureAdapter

        State =
            "READY"

        UpdatedAt =
            Get-Date

    }

}



function Import-AckiosArchitectureContextGraph {

    param(

        [object]$RuntimeBridge,

        [object]$ArchitectureContext

    )


    if($null -eq $ArchitectureContext.graph){

        throw "ArchitectureContext does not contain graph."

    }


    $RuntimeBridge.ArchitectureAdapter =
        New-AckiosGalaxyVisualizationArchitectureGraphAdapter `
        $ArchitectureContext.graph


    $RuntimeBridge.ArchitectureAdapter =
        Convert-AckiosArchitectureGraphToGalaxyNodes `
        $RuntimeBridge.ArchitectureAdapter


    $RuntimeBridge.ArchitectureAdapter =
        Convert-AckiosArchitectureGraphToGalaxyEdges `
        $RuntimeBridge.ArchitectureAdapter


    $RuntimeBridge.State =
        "GRAPH_IMPORTED"


    $RuntimeBridge.UpdatedAt =
        Get-Date


    return $RuntimeBridge

}



function Get-AckiosGalaxyVisualizationArchitectureRuntimeState {

    param(

        [object]$RuntimeBridge

    )


    return [pscustomobject]@{

        State =
            $RuntimeBridge.State

        Adapter =
            $RuntimeBridge.ArchitectureAdapter

        Bridge =
            $RuntimeBridge.ArchitectureBridge

        UpdatedAt =
            $RuntimeBridge.UpdatedAt

    }

}

