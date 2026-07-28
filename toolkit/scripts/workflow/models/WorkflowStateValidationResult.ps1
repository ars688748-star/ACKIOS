class WorkflowStateValidationResult {

    [string]$StateFile

    [string]$RoadmapSync

    [string]$NextStorySync

    [bool]$Passed

    [string[]]$Failures

    [WorkflowStateIssue[]]$Issues

}
