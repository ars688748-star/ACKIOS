Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyCameraPath.ps1"


function New-AckiosCameraPath {

    param(
        [string[]]$Nodes
    )


    $path =
        [GalaxyCameraPath]::new()


    $path.Nodes =
        $Nodes


    if($Nodes.Count -gt 0){

        $path.CurrentTarget =
            $Nodes[0]

    }


    return $path

}



function Next-AckiosCameraTarget {

    param(
        [object]$Path
    )


    if($Path.CurrentIndex -lt ($Path.Nodes.Count - 1)){

        $Path.CurrentIndex++

    }


    $Path.CurrentTarget =
        $Path.Nodes[$Path.CurrentIndex]


    return $Path

}
