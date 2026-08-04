Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyNode.ps1"
. "$PSScriptRoot\GalaxyEdge.ps1"

class GalaxyGraph {

    [System.Collections.ArrayList]$Nodes
    [System.Collections.ArrayList]$Edges

    GalaxyGraph(){

        $this.Nodes = [System.Collections.ArrayList]::new()
        $this.Edges = [System.Collections.ArrayList]::new()

    }

    [void] AddNode([GalaxyNode]$Node){
        $this.Nodes.Add($Node) | Out-Null
    }

    [void] AddEdge([GalaxyEdge]$Edge){
        $this.Edges.Add($Edge) | Out-Null
    }

    [object[]] GetNodes(){
        return $this.Nodes
    }

    [object[]] GetEdges(){
        return $this.Edges
    }

}
