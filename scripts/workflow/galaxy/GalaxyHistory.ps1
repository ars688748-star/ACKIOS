Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyChangeRecord.ps1"


class GalaxyHistory {

    [System.Collections.ArrayList]$Changes
    [System.Collections.ArrayList]$Subscribers


    GalaxyHistory(){

        $this.Changes = [System.Collections.ArrayList]::new()
        $this.Subscribers = [System.Collections.ArrayList]::new()

    }


    [void] Subscribe(
        [scriptblock]$Subscriber
    ){

        $this.Subscribers.Add($Subscriber) | Out-Null

    }


    [void] AddChange(
        [GalaxyChangeRecord]$Record
    ){

        $this.Changes.Add($Record) | Out-Null


        foreach($subscriber in $this.Subscribers){

            & $subscriber $Record

        }

    }


    [object[]] GetHistory(){

        return $this.Changes

    }


    [object[]] GetNodeHistory(
        [string]$NodeId
    ){

        return @(
            $this.Changes |
            Where-Object {$_.NodeId -eq $NodeId}
        )

    }

}
