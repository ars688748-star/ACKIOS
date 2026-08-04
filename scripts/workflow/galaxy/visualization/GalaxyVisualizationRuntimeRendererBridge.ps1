Set-StrictMode -Version Latest


function New-AckiosGalaxyVisualizationRendererFrame {

    param(

        [object]$RuntimeState

    )


    return [pscustomobject]@{

        Galaxy =
            $RuntimeState.Galaxy

        Renderer =
            $RuntimeState.Renderer

        Animation =
            $RuntimeState.Animation

        Camera =
            $RuntimeState.Camera

        Timeline =
            $RuntimeState.Timeline

        Timestamp =
            Get-Date

    }

}



function Update-AckiosGalaxyVisualizationRenderer {

    param(

        [object]$RendererFrame,

        [object]$RuntimeState

    )


    $RendererFrame.Galaxy =
        $RuntimeState.Galaxy


    $RendererFrame.Renderer =
        $RuntimeState.Renderer


    $RendererFrame.Animation =
        $RuntimeState.Animation


    $RendererFrame.Camera =
        $RuntimeState.Camera


    $RendererFrame.Timeline =
        $RuntimeState.Timeline


    $RendererFrame.Timestamp =
        Get-Date


    return $RendererFrame

}

