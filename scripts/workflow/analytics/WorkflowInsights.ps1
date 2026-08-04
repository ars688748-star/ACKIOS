function Get-WorkflowInsights
{
    $analytics = Get-WorkflowAnalytics
    $trend = Get-WorkflowTrend

    $recommendations = @()

    if($analytics.WarningCount -gt 0)
    {
        $recommendations += "Review workflow warnings."
    }

    if($analytics.FailCount -gt 0)
    {
        $recommendations += "Investigate workflow failures."
    }

    if($trend.Trend -eq "SLOWER")
    {
        $recommendations += "Workflow execution time increased."
    }

    if($trend.Trend -eq "FASTER")
    {
        $recommendations += "Workflow execution time improved."
    }

    if($recommendations.Count -eq 0)
    {
        $recommendations += "Workflow operating normally."
    }

    [PSCustomObject]@{
        Analytics = $analytics
        Trend = $trend
        Recommendations = $recommendations
    }
}
