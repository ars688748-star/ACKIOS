Set-StrictMode -Version Latest

class GalaxyVisualizationNode {

    [string]$Id
    [string]$Label
    [string]$Category
    [string]$Status
    [int]$Size
    [object]$Metadata

    GalaxyVisualizationNode(){
        $this.Size = 1
    }

}
