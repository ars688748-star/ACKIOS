Set-StrictMode -Version Latest


class GalaxyCameraPath {

    [object[]]$Nodes

    [int]$CurrentIndex

    [string]$CurrentTarget

    [datetime]$Timestamp


    GalaxyCameraPath(){

        $this.Nodes = @()

        $this.CurrentIndex = 0

        $this.Timestamp = Get-Date

    }

}
