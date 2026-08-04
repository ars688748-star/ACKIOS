Set-StrictMode -Version Latest


class GalaxyRendererFrame {

    [object[]]$Nodes
    [object[]]$Edges

    [object]$Camera
    [datetime]$Timestamp


    GalaxyRendererFrame(){

        $this.Nodes = @()
        $this.Edges = @()

        $this.Camera = $null
        $this.Timestamp = Get-Date

    }

}

