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


    Write-Host ("Current Story : {0}" -f $Dashboard.CurrentStory)
    Write-Host ("Next Story    : {0}" -f $Dashboard.NextStory)


    if($Dashboard.LastExecution){

        Write-Host ""
        Write-Host "Last Execution"

        Write-Host ("  Story       : {0}" -f $Dashboard.LastExecution.Story)
        Write-Host ("  Status      : {0}" -f $Dashboard.LastExecution.Status)
        Write-Host ("  Commit      : {0}" -f $Dashboard.LastExecution.Commit)

    }


    if($Dashboard.Statistics){

        Write-Host ""
        Write-Host "Statistics"

        Write-Host ("  Total       : {0}" -f $Dashboard.Statistics.TotalExecutions)
        Write-Host ("  Passed      : {0}" -f $Dashboard.Statistics.PassedExecutions)
        Write-Host ("  Failed      : {0}" -f $Dashboard.Statistics.FailedExecutions)

    }


    Write-Host ""
    Write-Host ("Build         : {0}" -f $Dashboard.Build)
    Write-Host ("Tests         : {0}" -f $Dashboard.Tests)

    Write-Host ""

}

