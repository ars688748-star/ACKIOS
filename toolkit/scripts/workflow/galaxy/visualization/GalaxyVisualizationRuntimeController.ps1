Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyVisualizationRuntimeService.ps1"


function Start-AckiosGalaxyVisualizationRuntime {

    param(

        [object]$Galaxy,

        [object[]]$Renderer,

        [object[]]$Animation,

        [object]$Camera,

        [object]$Timeline,

        [object]$Health

    )


    return Get-AckiosGalaxyVisualizationRuntime `
        $Galaxy `
        $Renderer `
        $Animation `
        $Camera `
        $Timeline `
        $Health

}



function Update-AckiosGalaxyVisualizationRuntime {

    param(

        [object]$RuntimeState,

        [object]$Update

    )


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

