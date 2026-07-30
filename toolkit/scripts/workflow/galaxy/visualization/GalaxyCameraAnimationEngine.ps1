Set-StrictMode -Version Latest


function New-AckiosGalaxyCameraTransition {

    param(

        [object]$CurrentCamera,

        [object]$TargetCamera

    )


    return [pscustomobject]@{

        CurrentCamera =
            $CurrentCamera

        TargetCamera =
            $TargetCamera

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



function Update-AckiosGalaxyCameraTransition {

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
            "MOVING"

    }


    $Transition.UpdatedAt =
        Get-Date


    return $Transition

}

