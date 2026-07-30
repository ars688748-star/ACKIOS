Set-StrictMode -Version Latest


function New-AckiosGalaxyRendererTransition {

    param(

        [object]$PreviousFrame,

        [object]$TargetFrame

    )


    return [pscustomobject]@{

        PreviousFrame =
            $PreviousFrame

        TargetFrame =
            $TargetFrame

        Progress =
            0

        State =
            "CREATED"

        StartedAt =
            Get-Date

        UpdatedAt =
            Get-Date

    }

}



function Update-AckiosGalaxyRendererTransition {

    param(

        [object]$Transition,

        [int]$Progress

    )


    $Transition.Progress =
        $Progress


    if(
        $Progress -ge 100
    ){

        $Transition.State =
            "COMPLETED"

    }
    else {

        $Transition.State =
            "TRANSITION"

    }


    $Transition.UpdatedAt =
        Get-Date


    return $Transition

}

