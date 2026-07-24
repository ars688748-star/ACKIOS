Set-StrictMode -Version Latest


function Get-WorkflowExecutionStatistics {

    $history = Get-WorkflowExecutionHistory


    $total = @($history).Count

    $passed = @(
        $history |
        Where-Object {
            $_.Status -eq "COMPLETED"
        }
    ).Count


    $failed = @(
        $history |
        Where-Object {
            $_.Status -ne "COMPLETED"
        }
    ).Count


    return [PSCustomObject]@{

        TotalExecutions = $total

        PassedExecutions = $passed

        FailedExecutions = $failed

    }

}



function Get-WorkflowExecutionDashboard {


    $last = Get-LastWorkflowExecution

    $stats = Get-WorkflowExecutionStatistics

    $metrics = Get-WorkflowDashboardMetrics

    $intelligence = Get-WorkflowIntelligence

    $state = Get-AckiWorkflowState


    return [PSCustomObject]@{

        CurrentStory = $state.CurrentStory

        NextStory = $state.NextStory


        LastExecution = $last


        Statistics = $stats


        Metrics = $metrics

        Intelligence = $intelligence


        Build = $state.Build

        Tests = $state.Tests

        QualityGate = Invoke-QualityGate

    }

}




