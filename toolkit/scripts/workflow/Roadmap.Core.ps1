Set-StrictMode -Version Latest
. "$PSScriptRoot\models\RoadmapState.ps1"
. "$PSScriptRoot\storage\RoadmapStorage.ps1"
. "$PSScriptRoot\services\WorkflowState.ps1"
function Get-RoadmapState {
    $content = Get-Roadmap
    function Get-Value {
        param(
            [string]$Name
        )
        $index = [Array]::IndexOf($content, $Name)
        if ($index -lt 0) {
            throw "$Name not found."
        }
        return $content[$index + 2].Trim()
    }
    $state = [RoadmapState]::new()
    $state.CurrentEpic  = Get-Value "Current Epic:"
    $state.CurrentStory = Get-Value "Current Story:"
    $state.NextStory    = Get-Value "Next Story:"
    return $state
}
function Get-RoadmapCurrentStory {
    (Get-RoadmapState).CurrentStory
}
function Get-RoadmapNextStory {
    (Get-RoadmapState).NextStory
}


function Update-RoadmapFromWorkflowState {

    $workflow = Get-AckiWorkflowState
    $content  = Get-Roadmap

    function Set-Value {
        param(
            [string]$Name,
            [string]$Value
        )

        $index = [Array]::IndexOf($content, $Name)

        if ($index -lt 0) {
            throw "$Name not found."
        }

        $content[$index + 2] = $Value
    }

    Set-Value "Current Epic:"  $workflow.CurrentEpic
    Set-Value "Current Story:" $workflow.CurrentStory
    Set-Value "Next Story:"    $workflow.NextStory

    Save-Roadmap $content

    Write-Success "MASTER ROADMAP synchronized."

}

