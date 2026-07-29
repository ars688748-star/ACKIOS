Set-StrictMode -Version Latest


class GalaxyVisualizationRuntimeState {

    [object]$Galaxy

    [object[]]$Renderer

    [object[]]$Animation

    [object]$Camera

    [object]$Timeline

    [object]$Health

    [datetime]$Timestamp


    GalaxyVisualizationRuntimeState(){

        $this.Galaxy = $null

        $this.Renderer = @()

        $this.Animation = @()

        $this.Camera = $null

        $this.Timeline = $null

        $this.Health = $null

        $this.Timestamp = Get-Date

    }

}
