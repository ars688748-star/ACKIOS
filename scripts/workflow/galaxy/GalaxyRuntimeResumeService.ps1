Set-StrictMode -Version Latest


function Start-AckiosGalaxyResume {

    param(
        [string]$SnapshotPath,
        [object]$GalaxyView
    )


    if(
        !(Test-Path $SnapshotPath)
    ){

        return $null

    }


    $snapshot =
        Load-AckiosGalaxyRuntimeSnapshot `
        $SnapshotPath


    $runtime =
        Restore-AckiosGalaxyRuntimeSnapshot `
        $snapshot


    $applied =
        Apply-AckiosGalaxyRuntimeState `
        $runtime


    $objects =
        Rebuild-AckiosGalaxyRuntimeObjects `
        $applied


    $renderer =
        Build-AckiosRestoredRendererFrame `
        $GalaxyView `
        $objects


    $camera =
        Restore-AckiosCameraFromRuntimeState `
        $applied.CameraState


    $ResumeTransition =
        New-AckiosCameraTransition `
        $camera `
        $camera.FocusedNode


    $ResumeTransition =
        Update-AckiosCameraTransition `
        $ResumeTransition `
        50


    $renderer =
        Update-AckiosRendererCameraState `
        $renderer `
        $camera `
        $ResumeTransition


    $visualization =
        Get-AckiosGalaxyVisualizationRuntime `
        $applied.GalaxyState `
        $objects.RendererStates `
        $objects.Frames `
        $camera `
        $renderer.Camera `
        (Test-AckiosGalaxyLoader ".\scripts\workflow\Workflow.Galaxy.Loader.ps1")

    return [pscustomobject]@{

        Runtime =
            $applied

        Objects =
            $objects

        Renderer =
            $renderer

        Camera =
            $camera
 
        Visualization =
            $visualization

        ResumedAt =
            Get-Date

    }

}




