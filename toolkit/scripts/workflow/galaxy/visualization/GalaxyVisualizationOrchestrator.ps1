Set-StrictMode -Version Latest


function New-AckiosGalaxyVisualizationOrchestrator {

    param(

        [object]$RendererState,

        [object]$CameraController

    )


    return [pscustomobject]@{

        RendererState =
            $RendererState

        CameraController =
            $CameraController

        ActiveState =
            "READY"

        UpdatedAt =
            Get-Date

    }

}



function Update-AckiosGalaxyVisualizationOrchestrator {

    param(

        [object]$Orchestrator,

        [object]$Event

    )


    if(
        $null -eq $Event
    ){

        return $Orchestrator

    }


    $Orchestrator.LastEvent =
        $Event


    $Orchestrator.ActiveState =
        "UPDATED"


    $Orchestrator.UpdatedAt =
        Get-Date


    return $Orchestrator

}

