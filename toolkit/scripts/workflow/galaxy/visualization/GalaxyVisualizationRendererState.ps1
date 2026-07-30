Set-StrictMode -Version Latest


class GalaxyVisualizationRendererState {

    [object]$CurrentFrame

    [object]$PreviousFrame

    [object]$Animation

    [object]$Camera

    [object]$Timeline

    [datetime]$UpdatedAt


    GalaxyVisualizationRendererState(){

        $this.CurrentFrame =
            $null

        $this.PreviousFrame =
            $null

        $this.Animation =
            @()

        $this.Camera =
            $null

        $this.Timeline =
            $null

        $this.UpdatedAt =
            Get-Date

    }

}



function New-AckiosGalaxyVisualizationRendererState {

    param(

        [object]$RendererFrame

    )


    $State =
        [GalaxyVisualizationRendererState]::new()


    $State.CurrentFrame =
        $RendererFrame


    $State.Animation =
        $RendererFrame.Animation


    $State.Camera =
        $RendererFrame.Camera


    $State.Timeline =
        $RendererFrame.Timeline


    $State.UpdatedAt =
        Get-Date


    return $State

}



function Update-AckiosGalaxyVisualizationRendererState {

    param(

        [object]$State,

        [object]$RendererFrame

    )


    $State.PreviousFrame =
        $State.CurrentFrame


    $State.CurrentFrame =
        $RendererFrame


    $State.Animation =
        $RendererFrame.Animation


    $State.Camera =
        $RendererFrame.Camera


    $State.Timeline =
        $RendererFrame.Timeline


    $State.UpdatedAt =
        Get-Date


    return $State

}

