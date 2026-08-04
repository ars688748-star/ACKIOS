Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyAnimationTransition.ps1"


function Convert-AckiosTimelineToTransitions {

    param(
        [object]$Timeline
    )


    $Transitions = @()


    foreach($record in $Timeline.GetRecords()){


        if($record.Type -eq "GalaxyHistory"){


            $change = $record.Data


            $transition = [GalaxyAnimationTransition]::new()


            $transition.NodeId = $change.NodeId
            $transition.Trigger = $change.EventName
            $transition.Timestamp = $change.Timestamp


            if($change.Data.ContainsKey("Before")){

                $transition.BeforeState =
                    $change.Data["Before"]

            }


            if($change.Data.ContainsKey("After")){

                $transition.AfterState =
                    $change.Data["After"]

            }


            $Transitions += $transition

        }

    }


    return $Transitions

}
