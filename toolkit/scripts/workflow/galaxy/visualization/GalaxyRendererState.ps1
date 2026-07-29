Set-StrictMode -Version Latest


class GalaxyRendererNodeState {

    [string]$NodeId
    [string]$Label
    [string]$Category
    [string]$Status

    [int]$Size

    [int]$AnimationProgress

    [string]$CurrentState
    [string]$TargetState

    [string]$Trigger

    [datetime]$Timestamp

}
