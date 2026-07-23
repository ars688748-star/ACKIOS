Set-StrictMode -Version Latest

function ConvertTo-RoadmapMarkdown {

    param(
        [Parameter(Mandatory)]
        [RoadmapModel]$Model
    )

    $lines = @()

    $lines += "# ACKIOS MASTER ROADMAP"
    $lines += "Version: $($Model.Version)"
    $lines += "Status: $($Model.Status)"
    $lines += "---"

    $lines += "## CURRENT STATE"
    $lines += "Phase: $($Model.Phase)"
    $lines += "Release: $($Model.Release)"
    $lines += "Progress: $($Model.Progress)"

    $lines += "Current Epic:"
    $lines += ""
    $lines += $Model.CurrentEpic
    $lines += ""

    $lines += "Current Story:"
    $lines += ""
    $lines += $Model.CurrentStory
    $lines += ""

    $lines += "Next Story:"
    $lines += ""
    $lines += $Model.NextStory

    $lines += "---"
    $lines += "## ROADMAP"
    $lines += "### Foundation"

    foreach($item in $Model.Roadmap){
        $lines += "- [ ] $item"
    }

    $lines += "---"
    $lines += "## DEVELOPMENT LOG"
    $lines += (Get-Date -Format "MM/dd/yyyy HH:mm:ss")
    $lines += "Generated automatically"

    $lines += "---"
    $lines += "## NEXT TASK"

    foreach($task in $Model.NextTasks){
        $lines += "- $task"
    }

    return $lines
}
