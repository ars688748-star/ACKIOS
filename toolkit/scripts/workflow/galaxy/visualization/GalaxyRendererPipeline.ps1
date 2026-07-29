Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyRendererFrame.ps1"


function New-AckiosRendererFrame {

    param(
        [object]$GalaxyView,
        [object[]]$AnimatedStates
    )


    $frame =
        [GalaxyRendererFrame]::new()


    foreach($node in $GalaxyView.Nodes){


        $animated =
            $AnimatedStates |
            Where-Object {
                $_.NodeId -eq $node.Id
            }


        if($animated){

            $frame.Nodes += $animated

        }
        else {

            $frame.Nodes += $node

        }

    }


    foreach($edge in $GalaxyView.Edges){

        $frame.Edges += $edge

    }


    return $frame

}
