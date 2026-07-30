Set-StrictMode -Version Latest


function New-AckiosGalaxyVisualizationTimelineTransitionOrchestrator {

    param(

        [object]$AnimationBridge,

        [object]$RendererTransitionEngine,

        [object]$CameraAnimationEngine

    )


    return [pscustomobject]@{

        AnimationBridge =
            $AnimationBridge

        RendererTransitionEngine =
            $RendererTransitionEngine

        CameraAnimationEngine =
            $CameraAnimationEngine

        ActiveTransition =
            $null

        State =
            "READY"

        UpdatedAt =
            Get-Date

    }

}



function Start-AckiosGalaxyVisualizationTimelineTransition {

    param(

        [object]$Orchestrator

    )


    $Orchestrator.ActiveTransition =
        [pscustomobject]@{

            Renderer =
                $Orchestrator.RendererTransitionEngine

            Camera =
                $Orchestrator.CameraAnimationEngine

            Progress =
                0

            State =
                "TRANSITION"

            StartedAt =
                Get-Date

        }


    $Orchestrator.State =
        "TRANSITIONING"

    $Orchestrator.UpdatedAt =
        Get-Date


    return $Orchestrator

}



function Update-AckiosGalaxyVisualizationTimelineTransition {

    param(

        [object]$Orchestrator,

        [int]$Progress

    )


    if($Progress -ge 100){

        $Orchestrator.ActiveTransition.State =
            "COMPLETED"

        $Orchestrator.State =
            "READY"

    }


    $Orchestrator.ActiveTransition.Progress =
        $Progress


    $Orchestrator.UpdatedAt =
        Get-Date


    return $Orchestrator

}



function Get-AckiosGalaxyVisualizationTimelineTransitionState {

    param(

        [object]$Orchestrator

    )


    return [pscustomobject]@{

        State =
            $Orchestrator.State

        Transition =
            $Orchestrator.ActiveTransition

        UpdatedAt =
            $Orchestrator.UpdatedAt

    }

}


