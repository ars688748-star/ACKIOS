Set-StrictMode -Version Latest


function New-AckiosGalaxyVisualizationEventExecutor {

    param(

        [object]$Router,

        [object]$Orchestrator

    )


    return [pscustomobject]@{

        Router =
            $Router

        Orchestrator =
            $Orchestrator

        Handlers =
            @{}

        State =
            "READY"

        UpdatedAt =
            Get-Date

    }

}



function Register-AckiosGalaxyVisualizationEventHandler {

    param(

        [object]$Executor,

        [string]$Target,

        [scriptblock]$Handler

    )


    $Executor.Handlers[$Target] =
        $Handler


    $Executor.UpdatedAt =
        Get-Date


    return $Executor

}



function Invoke-AckiosGalaxyVisualizationEventExecutor {

    param(

        [object]$Executor,

        [object]$Event

    )


    $Route =
        Invoke-AckiosGalaxyVisualizationEventRoute `
        $Executor.Router `
        $Event


    if(
        $null -eq $Route
    ){

        return $null

    }


    if(
        $Executor.Handlers.ContainsKey($Route.Target)
    ){

        return & $Executor.Handlers[$Route.Target] $Event

    }


    return $Route

}

