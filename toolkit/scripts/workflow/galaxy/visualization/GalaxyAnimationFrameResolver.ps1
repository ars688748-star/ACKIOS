Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyResolvedAnimationFrame.ps1"


function Resolve-AckiosAnimationFrame {

    param(
        [object]$Clock,
        [object[]]$Frames
    )


    $resolved =
        [GalaxyResolvedAnimationFrame]::new()


    $frame =
        $Frames[$Clock.CurrentFrame]


    $resolved.NodeId =
        $frame.NodeId


    $resolved.FrameIndex =
        $Clock.CurrentFrame


    $resolved.Progress =
        $Clock.Progress


    $resolved.CurrentState =
        $frame.CurrentState


    $resolved.TargetState =
        $frame.TargetState


    $resolved.Trigger =
        $frame.Trigger


    $resolved.Timestamp =
        Get-Date


    return $resolved

}
