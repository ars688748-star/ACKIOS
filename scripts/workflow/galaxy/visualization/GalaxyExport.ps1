Set-StrictMode -Version Latest

function Export-AckiosGalaxyVisualization {

    param(
        [object]$Visualization,
        [string]$Path
    )

    $export = @{
        GeneratedAt = Get-Date
        Nodes = $Visualization.Nodes
        Edges = $Visualization.Edges
    }

    $export |
        ConvertTo-Json -Depth 20 |
        Set-Content $Path -Encoding UTF8

    return $Path

}
