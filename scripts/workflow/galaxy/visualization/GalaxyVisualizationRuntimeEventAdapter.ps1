Set-StrictMode -Version Latest


function Sync-AckiosGalaxyVisualizationRuntimeEvent {

    param(

        [object]$RuntimeState,

        [object]$Event

    )


    if(
        $null -eq $Event
    ){

        return $RuntimeState

    }


    $Update =
        [pscustomobject]@{}


    switch($Event.Name){

        "TimelineChanged" {

            $Update |
            Add-Member `
            -MemberType NoteProperty `
            -Name Timeline `
            -Value $Event.Payload

        }


        "CameraMoved" {

            $Update |
            Add-Member `
            -MemberType NoteProperty `
            -Name Camera `
            -Value $Event.Payload

        }


        "RuntimeUpdated" {

            foreach($Property in $Event.Payload.PSObject.Properties){

                $Update |
                Add-Member `
                -MemberType NoteProperty `
                -Name $Property.Name `
                -Value $Property.Value

            }

        }

    }


    foreach($Property in $Update.PSObject.Properties){

        if(
            $RuntimeState.PSObject.Properties.Name -contains $Property.Name
        ){

            $RuntimeState.$($Property.Name) =
                $Property.Value

        }

    }


    $RuntimeState.Timestamp =
        Get-Date


    return $RuntimeState

}



function Connect-AckiosGalaxyVisualizationRuntimeEvents {

    param(

        [object]$EventBus

    )


    $EventBus.Adapter =
        "GalaxyVisualizationRuntimeEventAdapter"


    return $EventBus

}

