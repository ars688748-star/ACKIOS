Set-StrictMode -Version Latest

class GalaxyEdge {

    [string]$From
    [string]$To
    [string]$Relation

    GalaxyEdge([string]$From,[string]$To,[string]$Relation){

        $this.From = $From
        $this.To = $To
        $this.Relation = $Relation

    }

}
