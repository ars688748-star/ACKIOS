Set-StrictMode -Version Latest

. "$PSScriptRoot\..\models\RoadmapModel.ps1"

function Render-Roadmap {

    param(
        [Parameter(Mandatory)]
        $Workflow
    )

    $model = New-RoadmapModel -Workflow $Workflow

    $lines = ConvertTo-RoadmapMarkdown -Model $model

    Save-Roadmap $lines

}
