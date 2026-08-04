Set-StrictMode -Version Latest


function New-AckiosGalaxyVisualizationFrameEngine {

    param(

        [object]$UnifiedState

    )


    return [pscustomobject]@{

        UnifiedState =
            $UnifiedState

        CurrentFrame =
            $null

        TargetFrame =
            $null

        FrameIndex =
            0

        Progress =
            0

        State =
            "READY"

        UpdatedAt =
            Get-Date

    }

}



function New-AckiosGalaxyVisualizationFrame {

    param(

        [object]$Engine,

        [int]$Progress

    )


    $Frame =
        [pscustomobject]@{

            Index =
                $Engine.FrameIndex

            Progress =
                $Progress

            State =
                $Engine.UnifiedState

            CreatedAt =
                Get-Date

        }


    $Engine.CurrentFrame =
        $Frame

    $Engine.Progress =
        $Progress


    $Engine.State =
        "FRAME_CREATED"


    $Engine.UpdatedAt =
        Get-Date


    return $Frame

}



function Update-AckiosGalaxyVisualizationFrame {

    param(

        [object]$Engine,

        [int]$Progress

    )


    $Engine.FrameIndex++

    $Engine.Progress =
        $Progress


    $Engine.CurrentFrame =
        New-AckiosGalaxyVisualizationFrame `
        $Engine `
        $Progress


    $Engine.State =
        "UPDATED"


    $Engine.UpdatedAt =
        Get-Date


    return $Engine

}



function Get-AckiosGalaxyVisualizationFrameState {

    param(

        [object]$Engine

    )


    return [pscustomobject]@{

        Frame =
            $Engine.CurrentFrame

        Index =
            $Engine.FrameIndex

        Progress =
            $Engine.Progress

        State =
            $Engine.State

        UpdatedAt =
            $Engine.UpdatedAt

    }

}

