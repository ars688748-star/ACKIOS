Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyTimelineViewModel.ps1"


function Convert-AckiosTimelineToViewModel {

    param(
        [object]$Timeline
    )


    $model = [GalaxyTimelineViewModel]::new()


    foreach($record in $Timeline.GetRecords()){


        if($record.Type -eq "GalaxyEvent"){

            $model.Events += $record

        }


        elseif($record.Type -eq "GalaxyHistory"){

            $model.Changes += $record

        }

    }


    return $model

}



function Convert-AckiosGalaxyToTimelineViewModel {

    param(
        [object]$Galaxy,
        [object]$Timeline
    )


    $model = Convert-AckiosTimelineToViewModel $Timeline


    foreach($edge in $Galaxy.GetEdges()){

        $model.Edges += $edge

    }


    foreach($node in $Galaxy.GetNodes()){

        $model.Nodes += $node

    }


    return $model

}

