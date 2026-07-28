Set-StrictMode -Version Latest

$rulePath = Join-Path $PSScriptRoot "..\rules"

Get-ChildItem $rulePath -Filter *.ps1 |
    Sort-Object Name |
    ForEach-Object {
        . $_.FullName
    }

function Get-WorkflowDecision {

    $decision = [WorkflowDecisionResult]::new()

    $decision.Status = "HEALTHY"
    $decision.Decision = "Continue Workflow"
    $decision.Priority = "NORMAL"

    $priorityOrder = @{
        "LOW" = 1
        "NORMAL" = 2
        "HIGH" = 3
        "CRITICAL" = 4
    }

    Get-Command Invoke-Workflow*Rule -ErrorAction SilentlyContinue |
        Sort-Object Name |
        ForEach-Object {

            $started = Get-Date

            $rule = & $_.Name

            $finished = Get-Date

            if($null -ne $rule){

                $rule.StartedAt = $started
                $rule.FinishedAt = $finished
                $rule.DurationMs = ($finished - $started).TotalMilliseconds

                $decision.TotalDurationMs += $rule.DurationMs
                $decision.ExecutedRules += $rule

            }

            if($null -eq $rule){
                return
            }

            if($priorityOrder[$rule.Priority] -gt $priorityOrder[$decision.Priority]){
                $decision.Status = $rule.Status
                $decision.Decision = $rule.Decision
                $decision.Priority = $rule.Priority
                $decision.WinningRule = $rule.Rule
            }

            if($rule.Recommendations){
                $decision.Recommendations += $rule.Recommendations
            }

            if($rule.Warnings){
                $decision.Warnings += $rule.Warnings
            }

            if($rule.StopPipeline){
                return
            }

        }

    return $decision

}



