Set-StrictMode -Version Latest


function New-AckiosGalaxyVisualizationRuntimeControlPlane {

    param(

        [object]$Router,

        [object]$Executor,

        [object]$ActionRegistry,

        [object]$Orchestrator

    )


    return [pscustomobject]@{

        Router =
            $Router

        Executor =
            $Executor

        ActionRegistry =
            $ActionRegistry

        Orchestrator =
            $Orchestrator

        State =
            "READY"

        UpdatedAt =
            Get-Date

    }

}



function Invoke-AckiosGalaxyVisualizationRuntimeCommand {

    param(

        [object]$ControlPlane,

        [object]$Event

    )


    $Result =
        Invoke-AckiosGalaxyVisualizationEventExecutor `
        $ControlPlane.Executor `
        $Event


    $ControlPlane.State =
        "UPDATED"


    $ControlPlane.UpdatedAt =
        Get-Date


    return [pscustomobject]@{

        Result =
            $Result

        State =
            $ControlPlane.State

        UpdatedAt =
            $ControlPlane.UpdatedAt

    }

}

