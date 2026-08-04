Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyGraph.ps1"

function New-AckiosGalaxy {

    $graph = [GalaxyGraph]::new()

    $nodes = @(
        @{Id="brain"; Name="Brain"; Type="CORE"},
        @{Id="memory"; Name="Memory"; Type="DATA"},
        @{Id="workflow"; Name="Workflow"; Type="ENGINE"},
        @{Id="runtime"; Name="Runtime"; Type="RUNTIME"},
        @{Id="platform"; Name="Platform"; Type="SYSTEM"},
        @{Id="knowledge"; Name="Knowledge"; Type="INTELLIGENCE"},
        @{Id="architecture"; Name="Architecture"; Type="MODEL"}
    )

    foreach($item in $nodes){

        $node = [GalaxyNode]::new(
            $item.Id,
            $item.Name,
            $item.Type
        )

        $graph.AddNode($node)
    }

    $edges = @(
        @("brain","memory","uses"),
        @("brain","knowledge","uses"),
        @("workflow","runtime","controls"),
        @("runtime","platform","runs_on"),
        @("architecture","knowledge","describes")
    )

    foreach($edge in $edges){

        $graph.AddEdge(
            [GalaxyEdge]::new(
                $edge[0],
                $edge[1],
                $edge[2]
            )
        )

    }

    return $graph

}
