Set-StrictMode -Version Latest


function New-AckiosGalaxyVisualizationEventRouter {

    param(

        [object]$Orchestrator

    )


    return [pscustomobject]@{

        Orchestrator =
            $Orchestrator

        Routes =
            @{}

        State =
            "READY"

        UpdatedAt =
            Get-Date

    }

}



function Register-AckiosGalaxyVisualizationEventRoute {

    param(

        [object]$Router,

        [string]$EventName,

        [string]$Target

    )


    $Router.Routes[$EventName] =
        $Target


    $Router.UpdatedAt =
        Get-Date


    return $Router

}



function Invoke-AckiosGalaxyVisualizationEventRoute {

    param(

        [object]$Router,

        [object]$Event

    )


    if(
        !$Router.Routes.ContainsKey($Event.Name)
    ){

        return $null

    }


    return [pscustomobject]@{

        Event =
            $Event.Name

        Target =
            $Router.Routes[$Event.Name]

        RoutedAt =
            Get-Date

    }

}

