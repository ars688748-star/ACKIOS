Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyTimelineRecord.ps1"


class GalaxyTimeline {

    [System.Collections.ArrayList]$Records


    GalaxyTimeline(){

        $this.Records = [System.Collections.ArrayList]::new()

    }


    [void] Add(
        [GalaxyTimelineRecord]$Record
    ){

        $this.Records.Add($Record) | Out-Null

    }


    [object[]] GetRecords(){

        return $this.Records

    }


}
