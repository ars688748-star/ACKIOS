Set-StrictMode -Version Latest


function New-AckiosGalaxyVisualizationTimelineEngine {

    param(

        [object]$Memory

    )


    return [pscustomobject]@{

        Memory =
            $Memory

        Timeline =
            @()

        State =
            "READY"

        UpdatedAt =
            Get-Date

    }

}



function Build-AckiosGalaxyVisualizationTimeline {

    param(

        [object]$Engine

    )


    $Items =
        @()


    foreach($Event in $Engine.Memory.Events){

        $Items +=
            [pscustomobject]@{

                Type =
                    "EVENT"

                Data =
                    $Event

                Timestamp =
                    $Event.Timestamp

            }

    }


    foreach($Snapshot in $Engine.Memory.Snapshots){

        $Items +=
            [pscustomobject]@{

                Type =
                    "SNAPSHOT"

                Data =
                    $Snapshot

                Timestamp =
                    $Snapshot.Timestamp

            }

    }


    $Engine.Timeline =
        $Items |
        Sort-Object Timestamp


    $Engine.UpdatedAt =
        Get-Date


    return $Engine

}



function Get-AckiosGalaxyVisualizationTimeline {

    param(

        [object]$Engine

    )


    return $Engine.Timeline

}

