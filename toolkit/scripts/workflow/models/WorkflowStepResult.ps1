. "$PSScriptRoot\WorkflowStatus.ps1"

class WorkflowStepResult {

    [string]$Name

    [WorkflowStatus]$Status

    [datetime]$Started

    [datetime]$Finished

    [timespan]$Duration

    [string]$Error

}
