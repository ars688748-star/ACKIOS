Set-StrictMode -Version Latest
$GalaxyRoot = Join-Path $PSScriptRoot "galaxy"
. (Join-Path $GalaxyRoot "GalaxyNode.ps1")
. (Join-Path $GalaxyRoot "GalaxyEdge.ps1")
. (Join-Path $GalaxyRoot "GalaxyGraph.ps1")
. (Join-Path $GalaxyRoot "GalaxyEngine.ps1")
. (Join-Path $GalaxyRoot "GalaxyDiscovery.ps1")
. (Join-Path $GalaxyRoot "GalaxyStateMapper.ps1")
. (Join-Path $GalaxyRoot "GalaxyUpdater.ps1")
. (Join-Path $GalaxyRoot "GalaxyEvent.ps1")
. (Join-Path $GalaxyRoot "GalaxyEventBus.ps1")
. (Join-Path $GalaxyRoot "GalaxyEventProcessor.ps1")
. (Join-Path $GalaxyRoot "GalaxyChangeRecord.ps1")
. (Join-Path $GalaxyRoot "GalaxyHistory.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyVisualizationNode.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyVisualizationEdge.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyVisualizationEngine.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyExport.ps1")
. (Join-Path $GalaxyRoot "GalaxySnapshot.ps1")
. (Join-Path $GalaxyRoot "GalaxySnapshotStorage.ps1")
. (Join-Path $GalaxyRoot "GalaxyDiffResult.ps1")
. (Join-Path $GalaxyRoot "GalaxySnapshotComparer.ps1")
. (Join-Path $GalaxyRoot "GalaxyTimelineRecord.ps1")
. (Join-Path $GalaxyRoot "GalaxyTimeline.ps1")
. (Join-Path $GalaxyRoot "GalaxyTimelineBuilder.ps1")
. (Join-Path $GalaxyRoot "GalaxyTimelineStorage.ps1")
. (Join-Path $GalaxyRoot "GalaxyTimelineService.ps1")
. (Join-Path $GalaxyRoot "GalaxyTimelineSubscriber.ps1")
. (Join-Path $GalaxyRoot "GalaxyHistoryTimelineSubscriber.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyTimelineViewModel.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyTimelineVisualizationEngine.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyInteractiveModel.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyInteractiveConverter.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyAnimationState.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyAnimationConverter.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyAnimationTransition.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyTransitionConverter.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyAnimationFrame.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyAnimationFrameGenerator.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyAnimationPlayback.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyAnimationPlaybackEngine.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyAnimationClock.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyAnimationClockEngine.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyResolvedAnimationFrame.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyAnimationFrameResolver.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyRendererState.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyRendererStateConverter.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyRendererFrame.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyVisualizationRuntimeState.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyVisualizationRuntimeFactory.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyVisualizationRuntimeService.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyVisualizationRuntimeController.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyRendererPipeline.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyStaticRendererConverter.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyCameraState.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyCameraController.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyCameraTransition.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyCameraMovementEngine.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyCameraEasing.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyCameraEasingEngine.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyCameraPath.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyCameraPathEngine.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyCameraPathGenerator.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyCameraFollowState.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyCameraFollowEngine.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyCameraEventHandler.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyCameraFollowTransitionEngine.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyCameraRendererBridge.ps1")
. (Join-Path $GalaxyRoot "visualization\GalaxyRendererNodeAdapter.ps1")
. (Join-Path $GalaxyRoot "GalaxyRuntimeSnapshot.ps1")
. (Join-Path $GalaxyRoot "GalaxyRuntimeSnapshotFactory.ps1")
. (Join-Path $GalaxyRoot "GalaxyLoaderGuard.ps1")


$LoaderPath = $MyInvocation.MyCommand.Path


$LoaderHealth =
    Test-AckiosGalaxyLoader `
    $LoaderPath


if(
    !$LoaderHealth.Healthy
){

    Repair-AckiosGalaxyLoader `
    $LoaderPath

}

. (Join-Path $GalaxyRoot "GalaxyRuntimeSnapshotStorage.ps1")
. (Join-Path $GalaxyRoot "GalaxyRuntimeRestore.ps1")
. (Join-Path $GalaxyRoot "GalaxyRuntimeApplier.ps1")
. (Join-Path $GalaxyRoot "GalaxyRuntimeRebuilder.ps1")
. (Join-Path $GalaxyRoot "GalaxyRuntimeRendererBuilder.ps1")
. (Join-Path $GalaxyRoot "GalaxyRuntimeCameraRestore.ps1")
. (Join-Path $GalaxyRoot "GalaxyRuntimeResumeService.ps1")
