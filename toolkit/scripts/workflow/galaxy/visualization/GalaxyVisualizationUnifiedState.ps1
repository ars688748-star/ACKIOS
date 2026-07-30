Set-StrictMode -Version Latest


function New-AckiosGalaxyVisualizationUnifiedState {

    param(

        [object]$Runtime

    )


    return [pscustomobject]@{

        Runtime =
            $Runtime

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

        CreatedAt =
            Get-Date

        UpdatedAt =
            Get-Date

    }

}



function Update-AckiosGalaxyVisualizationUnifiedState {

    param(

        [object]$State,

        [object]$Runtime

    )


    $State.Runtime =
        $Runtime

    $State.Timeline =
        $Runtime.Timeline

    $State.Renderer =
        $Runtime.Renderer

    $State.Camera =
        $Runtime.Camera

    $State.Animation =
        $Runtime.Animation

    $State.Transition =
        $Runtime.Transition

    $State.UpdatedAt =
        Get-Date


    return $State

}



function Get-AckiosGalaxyVisualizationUnifiedState {

    param(

        [object]$State

    )


    return $State

}

