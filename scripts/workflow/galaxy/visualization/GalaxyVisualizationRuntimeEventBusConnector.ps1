Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyVisualizationRuntimePipeline.ps1"


function Connect-AckiosGalaxyVisualizationRuntimeEventBus {

    param(

        [object]$EventBus,

        [object]$RuntimePipeline

    )


    if(
        !($EventBus | Get-Member -Name Handlers)
    ){

        $EventBus |
        Add-Member `
        -MemberType NoteProperty `
        -Name Handlers `
        -Value @{}

    }


    $EventBus.Handlers["GalaxyVisualizationRuntime"] =
    {
        param($Event)


        Invoke-AckiosGalaxyVisualizationRuntimePipelineEvent `
        $RuntimePipeline `
        $Event

    }


    return $EventBus

}



function Invoke-AckiosGalaxyVisualizationRuntimeEventBusEvent {

    param(

        [object]$EventBus,

        [object]$Event

    )


    if(
        $EventBus.Handlers.ContainsKey("GalaxyVisualizationRuntime")
    ){

        return & $EventBus.Handlers["GalaxyVisualizationRuntime"] $Event

    }


    return $null

}

