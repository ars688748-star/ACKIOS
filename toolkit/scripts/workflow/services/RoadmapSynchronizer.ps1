Set-StrictMode -Version Latest

. "$PSScriptRoot\WorkflowState.ps1"
. "$PSScriptRoot\RoadmapRenderer.ps1"

function Update-RoadmapFromWorkflowState {

    $workflow = Get-AckiWorkflowState

    Render-Roadmap -Workflow $workflow

    Write-Success "MASTER ROADMAP synchronized."

}






