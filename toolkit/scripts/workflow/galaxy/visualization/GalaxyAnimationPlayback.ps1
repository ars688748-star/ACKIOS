Set-StrictMode -Version Latest


class GalaxyAnimationPlayback {

    [string]$NodeId
    [object[]]$Frames
    [int]$CurrentFrame
    [int]$Duration
    [string]$Status
    [datetime]$StartedAt


    GalaxyAnimationPlayback(){

        $this.Frames = @()
        $this.CurrentFrame = 0
        $this.Status = "READY"

    }

}
