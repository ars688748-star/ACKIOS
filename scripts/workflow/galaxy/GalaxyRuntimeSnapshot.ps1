Set-StrictMode -Version Latest


class GalaxyRuntimeSnapshot {

    [object]$GalaxyState

    [object[]]$RendererStates

    [object]$AnimationState

    [object]$CameraState

    [object]$TimelineState

    [datetime]$Timestamp


    GalaxyRuntimeSnapshot(){

        $this.RendererStates = @()

        $this.Timestamp = Get-Date

    }

}
