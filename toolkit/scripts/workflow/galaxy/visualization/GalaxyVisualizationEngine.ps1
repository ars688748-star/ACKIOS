Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyVisualizationNode.ps1"
. "$PSScriptRoot\GalaxyVisualizationEdge.ps1"

function Convert-AckiosGalaxyToVisualization {

    param(
        [object]$Galaxy
    )

    $model = @{
        Nodes = @()
        Edges = @()
    }

    foreach($node in $Galaxy.GetNodes()){

        $visualNode = [GalaxyVisualizationNode]::new()

        $visualNode.Id = $node.Id
        $visualNode.Label = $node.Name
        $visualNode.Category = $node.Type
        $visualNode.Status = $node.Status
        $visualNode.Metadata = $node.Metadata

        switch($node.Type){
            "CORE" { $visualNode.Size = 5 }
            "RUNTIME" { $visualNode.Size = 4 }
            "SYSTEM" { $visualNode.Size = 3 }
            default { $visualNode.Size = 2 }
        }

        $model.Nodes += $visualNode

    }

    foreach($edge in $Galaxy.GetEdges()){

        $visualEdge = [GalaxyVisualizationEdge]::new()

        $visualEdge.Source = $edge.From
        $visualEdge.Target = $edge.To
        $visualEdge.Relation = $edge.Relation

        $model.Edges += $visualEdge

    }

    return $model

}
