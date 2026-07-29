Set-StrictMode -Version Latest


class GalaxyCameraFollowState {

    [bool]$Enabled

    [string]$FollowNode

    [string]$FollowEvent

    [datetime]$LastUpdate


    GalaxyCameraFollowState(){

        $this.Enabled = $false

        $this.LastUpdate = Get-Date

    }

}
