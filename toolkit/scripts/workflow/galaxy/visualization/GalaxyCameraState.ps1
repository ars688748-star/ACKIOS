Set-StrictMode -Version Latest


class GalaxyCameraState {

    [double]$PositionX
    [double]$PositionY
    [double]$PositionZ

    [double]$Zoom

    [string]$FocusedNode

    [datetime]$Timestamp


    GalaxyCameraState(){

        $this.PositionX = 0
        $this.PositionY = 0
        $this.PositionZ = 100

        $this.Zoom = 1

        $this.Timestamp = Get-Date

    }

}
