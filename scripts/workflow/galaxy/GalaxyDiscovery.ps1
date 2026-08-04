Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyGraph.ps1"

function Discover-AckiosGalaxy {

    $graph = [GalaxyGraph]::new()

    $systems = @(
        @{Id="brain"; Name="Brain"; Type="CORE"},
        @{Id="workflow"; Name="Workflow"; Type="ENGINE"},
        @{Id="runtime"; Name="Runtime"; Type="RUNTIME"},
        @{Id="platform"; Name="Platform"; Type="SYSTEM"},
        @{Id="diagnostics"; Name="Diagnostics"; Type="MONITORING"}
    )

    foreach($system in $systems){

        $node = [GalaxyNode]::new(
            $system.Id,
            $system.Name,
            $system.Type
        )

        $node.Metadata = @{
            Discovered = $true
            Timestamp = Get-Date
        }

        $graph.AddNode($node)

    }

    $relations = @(
        @("brain","runtime","controls"),
        @("runtime","platform","runs_on"),
        @("workflow","runtime","manages"),
        @("brain","diagnostics","monitors")
    )

    foreach($relation in $relations){

        $graph.AddEdge(
            [GalaxyEdge]::new(
                $relation[0],
                $relation[1],
                $relation[2]
            )
        )

    }

    return $graph

}
