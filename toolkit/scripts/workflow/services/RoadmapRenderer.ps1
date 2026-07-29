Set-StrictMode -Version Latest


function Render-Roadmap {

    param(
        [Parameter(Mandatory)]
        $Workflow
    )

    $model = [RoadmapModel]::new()

    $model.Phase = "Foundation"
    $model.Release = "1.0"
    $model.Progress = "0%"

    $model.CurrentEpic = $Workflow.CurrentEpic
    $model.CurrentStory = $Workflow.CurrentStory
    $model.NextStory = $Workflow.NextStory

    $model.Roadmap = @(
        "Workflow"
        "Dashboard"
        "Brain Foundation"
        "Build"
        "Documentation"
        "Release Workflow"
        "Project Wizard"
        "Import Existing Project"
        "Workspace"
        "Knowledge Database"
    )

    $model.NextTasks = @(
        "Story $($Workflow.NextStory)"
        "Implement next roadmap item"
        "Continue workflow automation"
    )

    $lines = ConvertTo-RoadmapMarkdown -Model $model

    Save-Roadmap $lines
}
