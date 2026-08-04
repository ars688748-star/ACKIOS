Set-StrictMode -Version Latest


class GalaxyCameraTransition {

    [double]$StartX
    [double]$StartY
    [double]$StartZ

    [double]$EndX
    [double]$EndY
    [double]$EndZ

    [string]$TargetNode

    [int]$Progress

    [datetime]$Timestamp


    GalaxyCameraTransition(){

        $this.Progress = 0
        $this.Timestamp = Get-Date

    }

}
