Set-StrictMode -Version Latest


function New-WorkflowDashboardReport {

    param(
        $Dashboard
    )


    return [PSCustomObject]@{

        GeneratedAt = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")

        CurrentStory = $Dashboard.CurrentStory

        NextStory = $Dashboard.NextStory


        LastExecution = $Dashboard.LastExecution


        TotalExecutions = $Dashboard.Statistics.TotalExecutions

        PassedExecutions = $Dashboard.Statistics.PassedExecutions

        FailedExecutions = $Dashboard.Statistics.FailedExecutions


        Metrics = $Dashboard.Metrics


        Build = $Dashboard.Build

        Tests = $Dashboard.Tests

    }

}



function ConvertTo-WorkflowDashboardMarkdown {

    param(
        $Report
    )


    $lines = @()


    $lines += "# ACKIOS Workflow Dashboard"
    $lines += ""

    $lines += "Generated:"
    $lines += $Report.GeneratedAt
    $lines += ""


    $lines += "## Current State"
    $lines += ""

    $lines += "Current Story:"
    $lines += $Report.CurrentStory
    $lines += ""

    $lines += "Next Story:"
    $lines += $Report.NextStory
    $lines += ""


    $lines += "## Statistics"
    $lines += ""

    $lines += "Total Executions:"
    $lines += $Report.TotalExecutions

    $lines += ""

    $lines += "Passed:"
    $lines += $Report.PassedExecutions

    $lines += ""

    $lines += "Failed:"
    $lines += $Report.FailedExecutions


    $lines += ""

    $lines += "## Metrics"

    $lines += ""

    $lines += "Total Executions:"
    $lines += $Report.Metrics.TotalExecutions

    $lines += ""

    $lines += "Success Rate:"
    $lines += $Report.Metrics.SuccessRate

    $lines += ""

    $lines += "Average Duration:"
    $lines += $Report.Metrics.AverageDuration

    $lines += ""

    $lines += "Last Execution Duration:"
    $lines += $Report.Metrics.LastExecutionDuration


    $lines += ""

    $lines += "## Quality"

    $lines += ""

    $lines += "Build:"
    $lines += $Report.Build

    $lines += ""

    $lines += "Tests:"
    $lines += $Report.Tests


    return $lines

}



function Save-WorkflowDashboardReport {

    param(
        $Report
    )


    $path = Join-Path `
        (Resolve-AckiRoot) `
        ".work\reports\WORKFLOW_DASHBOARD.md"


    ConvertTo-WorkflowDashboardMarkdown $Report |
        Set-Content $path


    return $path

}

