Set-StrictMode -Version Latest

function Get-WorkflowExecutionTrace {

    param(
        [WorkflowDecisionResult]$Decision
    )

    if($null -eq $Decision){
        return @()
    }

    $Decision.ExecutedRules |
        Sort-Object StartedAt |
        ForEach-Object {

            [PSCustomObject]@{

                Rule       = $_.Rule
                Status     = $_.Status
                Priority   = $_.Priority
                StartedAt  = $_.StartedAt
                FinishedAt = $_.FinishedAt
                DurationMs = [Math]::Round($_.DurationMs,2)

            }

        }

}
