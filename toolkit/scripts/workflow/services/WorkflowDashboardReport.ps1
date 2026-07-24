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

        Intelligence = $Dashboard.Intelligence


        Build = $Dashboard.Build

        Tests = $Dashboard.Tests

        QualityGate = $Dashboard.QualityGate

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

    $lines += ""

    $lines += "## Intelligence"

    $lines += ""

    $lines += "Status:"
    $lines += $Report.Intelligence.Status

    $lines += ""

    $lines += "Performance Score:"
    $lines += $Report.Intelligence.PerformanceScore

    $lines += ""

    $lines += "Success Rate:"
    $lines += $Report.Intelligence.SuccessRate

    $lines += ""

    $lines += "Trend:"
    $lines += $Report.Intelligence.Trend

    $lines += ""

    $lines += "Duration Trend:"
    $lines += $Report.Intelligence.DurationTrend

    $lines += "Reliability Trend:"
    $lines += $Report.Intelligence.ReliabilityTrend

    $lines += "Recommendation:"
    $lines += $Report.Intelligence.Recommendation

    $lines += "## Quality"

    $lines += ""

    $lines += "Build:"
    $lines += $Report.Build

    $lines += ""

    $lines += "Tests:"
    $lines += $Report.Tests


    $lines += ""

    $lines += "## Quality Gate"

    $lines += ""

    $lines += "Passed:"
    $lines += $Report.QualityGate.Passed

    $lines += ""

    $lines += "Repository:"
    $lines += $Report.QualityGate.Repository

    $lines += ""

    $lines += "Build:"
    $lines += $Report.QualityGate.Build

    $lines += ""

    $lines += "Tests:"
    $lines += $Report.QualityGate.Tests

    $lines += ""

    $lines += "StoryCatalog:"
    $lines += $Report.QualityGate.StoryCatalog

    $lines += ""

    $lines += "Roadmap:"
    $lines += $Report.QualityGate.Roadmap


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











