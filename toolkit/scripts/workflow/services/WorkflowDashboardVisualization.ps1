Set-StrictMode -Version Latest

function Get-WorkflowDashboardVisualization {

    param(
        [Parameter(Mandatory)]
        $Dashboard
    )


    $successRate = 0

    if($Dashboard.Metrics){

        $successRate = $Dashboard.Metrics.SuccessRate

    }


    return [PSCustomObject]@{

        Title = "ACKIOS Workflow Dashboard"

        CurrentStory = $Dashboard.CurrentStory

        NextStory = $Dashboard.NextStory


        Execution = [PSCustomObject]@{

            LastStory =
                if($Dashboard.LastExecution){
                    $Dashboard.LastExecution.Story
                }
                else{
                    $null
                }

            Status =
                if($Dashboard.LastExecution){
                    $Dashboard.LastExecution.Status
                }
                else{
                    "UNKNOWN"
                }

            Commit =
                if($Dashboard.LastExecution){
                    $Dashboard.LastExecution.Commit
                }
                else{
                    $null
                }

        }


        Metrics = [PSCustomObject]@{

            TotalExecutions =
                $Dashboard.Metrics.TotalExecutions

            SuccessRate =
                $successRate

            AverageDuration =
                $Dashboard.Metrics.AverageDuration

            LastExecutionDuration =
                $Dashboard.Metrics.LastExecutionDuration

        }


        Quality = [PSCustomObject]@{

            Build = $Dashboard.Build

            Tests = $Dashboard.Tests

        }

    }

}
