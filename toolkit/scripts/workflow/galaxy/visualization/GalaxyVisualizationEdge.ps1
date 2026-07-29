Set-StrictMode -Version Latest

class GalaxyVisualizationEdge {

    [string]$Source
    [string]$Target
    [string]$Relation
    [int]$Weight

    GalaxyVisualizationEdge(){
        $this.Weight = 1
    }

}
