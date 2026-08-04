Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyCameraPath.ps1"


function New-AckiosCameraPathFromGalaxy {

    param(
        [object]$GalaxyGraph,
        [string]$StartNode
    )


    $path =
        [GalaxyCameraPath]::new()


    $visited = @()


    $current =
        $GalaxyGraph.Nodes |
        Where-Object {
            $_.Id -eq $StartNode
        }


    if($current){

        $path.Nodes += $current.Id

        $visited += $current.Id

    }


    foreach($edge in $GalaxyGraph.Edges){


        if($edge.From -eq $StartNode){

            if($visited -notcontains $edge.To){

                $path.Nodes += $edge.To

                $visited += $edge.To

            }

        }

    }


    if($path.Nodes.Count -gt 0){

        $path.CurrentTarget =
            $path.Nodes[0]

    }


    return $path

}
