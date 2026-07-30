Set-StrictMode -Version Latest


function Sync-AckiosGalaxyVisualizationRuntimeState {

    param(

        [object]$RuntimeState,

        [object]$Event

    )


    if(
        $null -eq $RuntimeState
    ){

        return $null

    }


    if(
        $null -eq $Event
    ){

        return $RuntimeState

    }


    switch($Event.Name){

        "TimelineChanged" {

            $RuntimeState.Timeline =
                $Event.Payload

        }


        "CameraMoved" {

            $RuntimeState.Camera =
                $Event.Payload

        }


        "RuntimeUpdated" {

            foreach($Property in $Event.Payload.PSObject.Properties){

                if(
                    $RuntimeState.PSObject.Properties.Name -contains $Property.Name
                ){

                    $RuntimeState.$($Property.Name) =
                        $Property.Value

                }

            }

        }

    }


    $RuntimeState.Timestamp =
        Get-Date


    return $RuntimeState

}



function Start-AckiosGalaxyVisualizationRuntimeSync {

    param(

        [object]$RuntimeState,

        [object[]]$Events

    )


    foreach($Event in $Events){

        $RuntimeState =
            Sync-AckiosGalaxyVisualizationRuntimeState `
            $RuntimeState `
            $Event

    }


    return $RuntimeState

}

