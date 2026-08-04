Set-StrictMode -Version Latest


function ConvertTo-WorkflowPipelineRecord {

    param(
        [Parameter(Mandatory)]
        $Pipeline
    )


    $record = [WorkflowPipelineRecord]::new()

    $record.Name =
        $Pipeline.Name

    $record.Status =
        $Pipeline.Status

    $record.TotalSteps =
        $Pipeline.TotalSteps

    $record.PassedSteps =
        $Pipeline.PassedSteps

    $record.FailedSteps =
        $Pipeline.FailedSteps

    $record.SuccessRate =
        $Pipeline.SuccessRate

    $record.Duration =
        [string]$Pipeline.Duration


    return $record

}

