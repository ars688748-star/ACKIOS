Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyAnimationFrame.ps1"


function New-AckiosAnimationFrames {

    param(
        [object]$Transition
    )


    $frames = @()


    $steps = @(0,25,50,75,100)


    foreach($step in $steps){


        $frame = [GalaxyAnimationFrame]::new()


        $frame.NodeId = $Transition.NodeId

        $frame.Progress = $step

        $frame.TargetState = $Transition.AfterState

        $frame.Trigger = $Transition.Trigger

        $frame.Timestamp = Get-Date


        if($step -eq 0){

            $frame.CurrentState =
                $Transition.BeforeState

        }
        elseif($step -eq 100){

            $frame.CurrentState =
                $Transition.AfterState

        }
        else {

            $frame.CurrentState =
                "TRANSITION"

        }


        $frames += $frame

    }


    return $frames

}
