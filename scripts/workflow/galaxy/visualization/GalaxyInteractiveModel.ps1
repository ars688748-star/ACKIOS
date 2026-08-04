Set-StrictMode -Version Latest


class GalaxyInteractiveNode {

    [string]$Id
    [string]$Label
    [string]$Category
    [string]$Status
    [int]$Size
    [int]$HistoryCount
    [int]$EventCount
    [string]$ActivityLevel
    [string]$LastEvent
    [string]$LastChange
    [object[]]$Events


    GalaxyInteractiveNode(){

        $this.Events = @()

    }

}



class GalaxyInteractiveEdge {

    [string]$Source
    [string]$Target
    [string]$Relation

}



class GalaxyInteractiveModel {

    [object[]]$Nodes
    [object[]]$Edges
    [object[]]$Events
    [datetime]$GeneratedAt


    GalaxyInteractiveModel(){

        $this.Nodes = @()
        $this.Edges = @()
        $this.Events = @()
        $this.GeneratedAt = Get-Date

    }

}


