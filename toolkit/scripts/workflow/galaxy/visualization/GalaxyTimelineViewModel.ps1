Set-StrictMode -Version Latest

class GalaxyTimelineViewModel {

    [object[]]$Events
    [object[]]$Nodes
    [object[]]$Edges
    [object[]]$Changes
    [datetime]$GeneratedAt


    GalaxyTimelineViewModel(){

        $this.Events = @()
        $this.Nodes = @()
        $this.Edges = @()
        $this.Changes = @()
        $this.GeneratedAt = Get-Date

    }

}
