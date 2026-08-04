Set-StrictMode -Version Latest


function New-AckiosGalaxyVisualizationTimelineAnimationBridge {

    param(

        [object]$RuntimeSyncBridge,

        [object]$RendererTransitionController,

        [object]$CameraController

    )


    return [pscustomobject]@{

        RuntimeSyncBridge =
            $RuntimeSyncBridge

        RendererTransitionController =
            $RendererTransitionController

        CameraController =
            $CameraController

        AnimationState =
            "READY"

        UpdatedAt =
            Get-Date

    }

}



function Start-AckiosGalaxyVisualizationTimelineAnimation {

    param(

        [object]$Bridge

    )


    $Bridge.AnimationState =
        "ANIMATING"


    $Bridge.UpdatedAt =
        Get-Date


    return $Bridge

}



function Update-AckiosGalaxyVisualizationTimelineAnimation {

    param(

        [object]$Bridge

    )


    $Bridge.AnimationState =
        "UPDATED"


    $Bridge.UpdatedAt =
        Get-Date


    return $Bridge

}



function Get-AckiosGalaxyVisualizationTimelineAnimationState {

    param(

        [object]$Bridge

    )


    return [pscustomobject]@{

        State =
            $Bridge.AnimationState

        Renderer =
            $Bridge.RendererTransitionController

        Camera =
            $Bridge.CameraController

        UpdatedAt =
            $Bridge.UpdatedAt

    }

}

