Set-StrictMode -Version Latest


class GalaxyAnimationNodeState {

    [string]$NodeId
    [string]$State
    [string]$PreviousState
    [string]$Event
    [datetime]$Timestamp


}



class GalaxyAnimationState {

    [object[]]$Nodes
    [datetime]$GeneratedAt


    GalaxyAnimationState(){

        $this.Nodes = @()
        $this.GeneratedAt = Get-Date

    }

}
