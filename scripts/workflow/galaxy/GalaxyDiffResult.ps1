Set-StrictMode -Version Latest

class GalaxyDiffResult {

    [object[]]$AddedNodes
    [object[]]$RemovedNodes
    [object[]]$ChangedNodes
    [object[]]$AddedEdges
    [object[]]$RemovedEdges
    [object[]]$MetadataChanges

    GalaxyDiffResult(){

        $this.AddedNodes = @()
        $this.RemovedNodes = @()
        $this.ChangedNodes = @()
        $this.AddedEdges = @()
        $this.RemovedEdges = @()
        $this.MetadataChanges = @()

    }

}
