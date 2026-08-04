Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyRendererAutoTransitionService.ps1"


function Connect-AckiosGalaxyRendererEventTransitionBridge {

    param(

        [object]$EventBus,

        [object]$RendererState

    )


    if(
        !($EventBus | Get-Member -Name RendererHandlers)
    ){

        $EventBus |
        Add-Member `
        -MemberType NoteProperty `
        -Name RendererHandlers `
        -Value @{}

    }


    $EventBus.RendererHandlers["RendererTransition"] =
    {
        param($Event)


        $Controller =
            Start-AckiosGalaxyAutoTransition `
            $RendererState


        return $Controller

    }


    return $EventBus

}



function Invoke-AckiosGalaxyRendererEventTransition {

    param(

        [object]$EventBus,

        [object]$Event

    )


    if(
        $EventBus.RendererHandlers.ContainsKey("RendererTransition")
    ){

        return & $EventBus.RendererHandlers["RendererTransition"] $Event

    }


    return $null

}

