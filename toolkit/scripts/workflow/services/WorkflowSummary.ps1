Set-StrictMode -Version Latest

function Show-WorkflowSummary {

    param(

        [Parameter(Mandatory)]
        [WorkflowExecutionReport]$ExecutionReport,

        [Parameter(Mandatory)]
        $Health

    )

    Show-WorkflowExecutionReport $ExecutionReport

    Show-WorkflowHealth $Health

}
