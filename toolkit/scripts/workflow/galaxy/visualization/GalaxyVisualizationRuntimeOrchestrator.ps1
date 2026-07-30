Set-StrictMode -Version Latest


function New-AckiosGalaxyVisualizationRuntimeOrchestrator {

    param(

        [object]$TimelineController,

        [object]$RendererState,

        [object]$CameraController,

        [object]$AnimationBridge,

        [object]$TransitionOrchestrator

    )


    return [pscustomobject]@{

        Timeline =
            $TimelineController

        Renderer =
            $RendererState

        Camera =
            $CameraController

        Animation =
            $AnimationBridge

        Transition =
            $TransitionOrchestrator

        State =
            "READY"

        UpdatedAt =
            Get-Date

    }

}



function Start-AckiosGalaxyVisualizationRuntime {

    param(

        [object]$Runtime

    )


    $Runtime.State =
        "RUNNING"


    $Runtime.UpdatedAt =
        Get-Date


    return $Runtime

}



function Update-AckiosGalaxyVisualizationRuntime {

    param(

        [object]$Runtime

    )


    $Runtime.State =
        "UPDATED"


    $Runtime.UpdatedAt =
        Get-Date


    return $Runtime

}



function Get-AckiosGalaxyVisualizationRuntimeState {

    param(

        [object]$Runtime

    )


    return [pscustomobject]@{

        State =
            $Runtime.State

        Timeline =
            $Runtime.Timeline

        Renderer =
            $Runtime.Renderer

        Camera =
            $Runtime.Camera

        Animation =
            $Runtime.Animation

        Transition =
            $Runtime.Transition

        UpdatedAt =
            $Runtime.UpdatedAt

    }

}

