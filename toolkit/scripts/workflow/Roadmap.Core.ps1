Set-StrictMode -Version Latest
. "$PSScriptRoot\models\RoadmapState.ps1"
. "$PSScriptRoot\storage\RoadmapStorage.ps1"
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
