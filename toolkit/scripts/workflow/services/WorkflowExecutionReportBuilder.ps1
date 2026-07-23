Set-StrictMode -Version Latest

. "$PSScriptRoot\..\models\WorkflowExecutionReport.ps1"

function New-WorkflowExecutionReport {

    param(

        [Parameter(Mandatory)]
        [WorkflowStepResult[]]$Steps

    )

    $report = [WorkflowExecutionReport]::new()

    $report.Steps = $Steps

    $report.Succeeded = @(
        $Steps | Where-Object Status -eq ([WorkflowStatus]::PASS)
    ).Count

    $report.Failed = @(
        $Steps | Where-Object Status -eq ([WorkflowStatus]::FAIL)
    ).Count

    if($Steps.Count -gt 0){

        $report.Duration = [TimeSpan]::Zero

        foreach($step in $Steps){
            $report.Duration += $step.Duration
        }

        $report.Status = if($report.Failed -eq 0){
            [WorkflowStatus]::PASS
        }
        else{
            [WorkflowStatus]::FAIL
        }

    }

    return $report
}

