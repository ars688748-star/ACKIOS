Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyRendererTransitionController.ps1"


function Start-AckiosGalaxyAutoTransition {

    param(

        [object]$RendererState

    )


    $Controller =
        New-AckiosGalaxyRendererTransitionController `
        $RendererState


    if(
        $null -eq $RendererState.PreviousFrame
    ){

        return $Controller

    }


    return Start-AckiosGalaxyRendererTransition `
        $Controller `
        $RendererState.PreviousFrame `
        $RendererState.CurrentFrame

}



function Update-AckiosGalaxyAutoTransition {

    param(

        [object]$TransitionController,

        [int]$Progress

    )


    return Update-AckiosGalaxyRendererTransitionController `
        $TransitionController `
        $Progress

}

