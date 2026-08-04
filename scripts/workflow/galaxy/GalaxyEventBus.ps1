Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyEvent.ps1"


class GalaxyEventBus {

    [System.Collections.ArrayList]$Events
    [System.Collections.ArrayList]$Subscribers


    GalaxyEventBus(){

        $this.Events = [System.Collections.ArrayList]::new()
        $this.Subscribers = [System.Collections.ArrayList]::new()

    }


    [void] Subscribe(
        [scriptblock]$Subscriber
    ){

        $this.Subscribers.Add($Subscriber) | Out-Null

    }


    [void] Publish(
        [GalaxyEvent]$Event
    ){

        $this.Events.Add($Event) | Out-Null


        foreach($subscriber in $this.Subscribers){

            & $subscriber $Event

        }

    }


    [object[]] GetEvents(){

        return $this.Events

    }

}
