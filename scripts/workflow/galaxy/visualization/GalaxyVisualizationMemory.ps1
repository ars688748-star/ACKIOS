Set-StrictMode -Version Latest


function New-AckiosGalaxyVisualizationMemory {

    return [pscustomobject]@{

        Events =
            @()

        Snapshots =
            @()

        Transitions =
            @()

        State =
            "READY"

        UpdatedAt =
            Get-Date

    }

}



function Add-AckiosGalaxyVisualizationMemoryEvent {

    param(

        [object]$Memory,

        [object]$Event

    )


    $Memory.Events +=
        [pscustomobject]@{

            Event =
                $Event

            Timestamp =
                Get-Date

        }


    $Memory.UpdatedAt =
        Get-Date


    return $Memory

}



function Add-AckiosGalaxyVisualizationMemorySnapshot {

    param(

        [object]$Memory,

        [object]$State

    )


    $Memory.Snapshots +=
        [pscustomobject]@{

            State =
                $State

            Timestamp =
                Get-Date

        }


    $Memory.UpdatedAt =
        Get-Date


    return $Memory

}



function Get-AckiosGalaxyVisualizationMemoryTimeline {

    param(

        [object]$Memory

    )


    return [pscustomobject]@{

        Events =
            $Memory.Events

        Snapshots =
            $Memory.Snapshots

        Transitions =
            $Memory.Transitions

        GeneratedAt =
            Get-Date

    }

}

