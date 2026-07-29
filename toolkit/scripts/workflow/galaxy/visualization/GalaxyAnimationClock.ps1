Set-StrictMode -Version Latest


class GalaxyAnimationClock {

    [int]$ElapsedMilliseconds
    [int]$CurrentFrame
    [int]$TotalFrames
    [int]$Duration
    [int]$Progress
    [datetime]$StartedAt


    GalaxyAnimationClock(){

        $this.ElapsedMilliseconds = 0
        $this.CurrentFrame = 0
        $this.Progress = 0
        $this.StartedAt = Get-Date

    }

}
