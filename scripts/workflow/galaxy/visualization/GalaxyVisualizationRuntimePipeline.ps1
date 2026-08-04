Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyVisualizationRuntimeEventAdapter.ps1"
. "$PSScriptRoot\GalaxyVisualizationRuntimeSyncEngine.ps1"


function Start-AckiosGalaxyVisualizationRuntimePipeline {

    param(

        [object]$RuntimeState

    )


    return [pscustomobject]@{

        RuntimeState =
            $RuntimeState

        StartedAt =
            Get-Date

        Status =
            "RUNNING"

        LastEvent =
            $null

        UpdatedAt =
            Get-Date

    }

}



function Invoke-AckiosGalaxyVisualizationRuntimePipelineEvent {

    param(

        [object]$Pipeline,

        [object]$Event

    )


    if(
        $null -eq $Pipeline.RuntimeState
    ){

        return $null

    }


    $Pipeline.RuntimeState =
        Sync-AckiosGalaxyVisualizationRuntimeState `
        $Pipeline.RuntimeState `
        $Event


    $Pipeline.LastEvent =
        $Event


    $Pipeline.UpdatedAt =
        Get-Date


    return $Pipeline

}


