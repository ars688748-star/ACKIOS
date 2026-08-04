. "$PSScriptRoot\WorkflowStatus.ps1"
. "$PSScriptRoot\WorkflowStepResult.ps1"

class WorkflowExecutionReport {

    [WorkflowStepResult[]]$Steps = @()

    [WorkflowStatus]$Status

    [timespan]$Duration

    [int]$Succeeded

    [int]$Failed

}
