class WorkflowPipelineResult {

    [string]$Name

    [array]$Steps

    [string]$Status

    [datetime]$Started

    [datetime]$Finished

    [timespan]$Duration

    [int]$TotalSteps

    [int]$PassedSteps

    [int]$FailedSteps

    [double]$SuccessRate

}
