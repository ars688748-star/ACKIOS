Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyTimelineRecord.ps1"


class GalaxyTimelineBuilder {


    [object] BuildFromEvents(
        [object[]]$Events
    ){

        $timeline = [GalaxyTimeline]::new()


        foreach($event in $Events){


            $record = [GalaxyTimelineRecord]::new(
                "GalaxyEvent",
                $event.Source,
                $event
            )


            $timeline.Add($record)


        }


        return $timeline

    }



    [object] BuildFromHistory(
        [object[]]$History
    ){

        $timeline = [GalaxyTimeline]::new()


        foreach($change in $History){


            $record = [GalaxyTimelineRecord]::new(
                "GalaxyHistory",
                "GalaxyHistory",
                $change
            )


            $timeline.Add($record)


        }


        return $timeline

    }



    [object] BuildUnifiedTimeline(
        [object[]]$Events,
        [object[]]$History
    ){

        $timeline = [GalaxyTimeline]::new()


        foreach($event in $Events){

            $record = [GalaxyTimelineRecord]::new(
                "GalaxyEvent",
                $event.Source,
                $event
            )

            $timeline.Add($record)

        }


        foreach($change in $History){

            $record = [GalaxyTimelineRecord]::new(
                "GalaxyHistory",
                "GalaxyHistory",
                $change
            )

            $timeline.Add($record)

        }


        return $timeline

    }


}
