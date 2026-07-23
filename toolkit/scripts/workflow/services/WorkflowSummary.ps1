Set-StrictMode -Version Latest

function Show-WorkflowSummary {

    param(

        [WorkflowExecutionReport]$ExecutionReport,

        $Health

    )

    if($null -ne $ExecutionReport){

        Show-WorkflowExecutionReport $ExecutionReport

    }

    if($null -eq $Health){

        $Health = New-WorkflowHealth

    }

    Show-WorkflowHealth $Health

}
