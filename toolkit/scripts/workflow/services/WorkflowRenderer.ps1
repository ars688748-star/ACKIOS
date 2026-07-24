Set-StrictMode -Version Latest

function Show-WorkflowHealth {

    param(
        $Health
    )

    Write-Host ""
    Write-Host "Workflow Health"
    Write-Host "---------------"

    Write-Host ("Repository   : {0}" -f $Health.Repository)
    Write-Host ("Build        : {0}" -f $Health.Build)
    Write-Host ("Tests        : {0}" -f $Health.Tests)

    if($Health.StoryCatalog){

        Write-Host ""
        Write-Host "Story Catalog"

        Write-Host ("  Total      : {0}" -f $Health.StoryCatalog.Total)
        Write-Host ("  Valid      : {0}" -f $Health.StoryCatalog.Valid)
        Write-Host ("  Warnings   : {0}" -f $Health.StoryCatalog.Warnings)

        if($Health.StoryCatalog.Issues.Count -gt 0){

            Write-Host ""
            Write-Host "  Issues"

            foreach($issue in $Health.StoryCatalog.Issues){

                Write-Host ("    {0}" -f $issue)

            }
        }
    }

    if($Health.QualityGate){

        Write-Host ""
        Write-Host "Quality Gate"
        Write-Host "-------------"

        Write-Host ("  Passed       : {0}" -f $Health.QualityGate.Passed)
        Write-Host ("  Repository   : {0}" -f $Health.QualityGate.Repository)
        Write-Host ("  Build        : {0}" -f $Health.QualityGate.Build)
        Write-Host ("  Tests        : {0}" -f $Health.QualityGate.Tests)
        Write-Host ("  Catalog      : {0}" -f $Health.QualityGate.StoryCatalog)
        Write-Host ("  Roadmap      : {0}" -f $Health.QualityGate.Roadmap)

    }

    Write-Host ""
}


function Show-WorkflowExecutionReport {

    param(

        [Parameter(Mandatory)]
        [WorkflowExecutionReport]$Report

    )

    Write-Host ""
    Write-Host "Workflow Execution"
    Write-Host "------------------"

    foreach($step in $Report.Steps){

        Write-Host (
            "{0,-6} {1,-24} {2}" -f `
            $step.Status,
            $step.Name,
            $step.Duration
        )

    }

    Write-Host ""
    Write-Host "Summary"
    Write-Host "-------"

    Write-Host ("Succeeded : {0}" -f $Report.Succeeded)
    Write-Host ("Failed    : {0}" -f $Report.Failed)
    Write-Host ("Duration  : {0}" -f $Report.Duration)
    Write-Host ("Status    : {0}" -f $Report.Status)


    Write-Host ""

}

function Show-WorkflowExecutionDashboard {

    param(
        $Dashboard
    )


    Write-Host ""
    Write-Host "Workflow Dashboard"
    Write-Host "------------------"


    Write-Host ("Title         : {0}" -f $Dashboard.Title)

    Write-Host ""

    Write-Host ("Current Story : {0}" -f $Dashboard.CurrentStory)
    Write-Host ("Next Story    : {0}" -f $Dashboard.NextStory)


    if($Dashboard.Execution){

        Write-Host ""
        Write-Host "Last Execution"

        Write-Host ("  Story       : {0}" -f $Dashboard.Execution.LastStory)
        Write-Host ("  Status      : {0}" -f $Dashboard.Execution.Status)
        Write-Host ("  Commit      : {0}" -f $Dashboard.Execution.Commit)

    }


    if($Dashboard.Metrics){

        Write-Host ""
        Write-Host "Metrics"

        Write-Host ("  Total       : {0}" -f $Dashboard.Metrics.TotalExecutions)
        Write-Host ("  Success     : {0}%" -f $Dashboard.Metrics.SuccessRate)
        Write-Host ("  Average     : {0}" -f $Dashboard.Metrics.AverageDuration)
        Write-Host ("  Last Run    : {0}" -f $Dashboard.Metrics.LastExecutionDuration)

    }


    if($Dashboard.Quality){

        Write-Host ""
        Write-Host "Quality"

        Write-Host ("Build         : {0}" -f $Dashboard.Quality.Build)
        Write-Host ("Tests         : {0}" -f $Dashboard.Quality.Tests)

    }


    if($Dashboard.HistoryTimeline){

        Write-Host ""
        Write-Host "History Timeline"

        Write-Host ("  Executions : {0}" -f $Dashboard.HistoryTimeline.TotalExecutions)


        foreach($item in $Dashboard.HistoryTimeline.Items){

            Write-Host ""

            Write-Host ("  {0}" -f $item.Timestamp)
            Write-Host ("    Story    : {0}" -f $item.Story)
            Write-Host ("    Status   : {0}" -f $item.Status)
            Write-Host ("    Commit   : {0}" -f $item.Commit)
            Write-Host ("    Duration : {0}" -f $item.Duration)

        }

    }


    if($Dashboard.Analytics){

        Write-Host ""
        Write-Host "Analytics"


        if($Dashboard.Analytics.Performance){

            Write-Host ""
            Write-Host "Performance"

            Write-Host ("  Score       : {0}" -f $Dashboard.Analytics.Performance.Score)
            Write-Host ("  Average     : {0}" -f $Dashboard.Analytics.Performance.AverageDuration)

        }


        if($Dashboard.Analytics.Reliability){

            Write-Host ""
            Write-Host "Reliability"

            Write-Host ("  Success     : {0}%" -f $Dashboard.Analytics.Reliability.SuccessRate)
            Write-Host ("  Failure     : {0}%" -f $Dashboard.Analytics.Reliability.FailureRate)

        }


        if($Dashboard.Analytics.Insights){

            Write-Host ""
            Write-Host "Insights"

            Write-Host ("  Status      : {0}" -f $Dashboard.Analytics.Insights.Status)
            Write-Host ("  Recommendation : {0}" -f $Dashboard.Analytics.Insights.Recommendation)

        }

    }


    Write-Host ""

}






