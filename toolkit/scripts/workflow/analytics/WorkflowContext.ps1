function Get-WorkflowContext
{
    $history = @(Get-WorkflowHistory)

    $analytics = Get-WorkflowAnalytics
    $metrics = Get-WorkflowMetrics
    $trend = Get-WorkflowTrend
    $insights = Get-WorkflowInsights
    $health = Get-WorkflowHealth
    $decision = Get-WorkflowDecision

    [PSCustomObject]@{
        GeneratedAt = Get-Date

        History = $history

        Analytics = $analytics

        Metrics = $metrics

        Trend = $trend

        Insights = $insights

        Health = $health

        Decision = $decision
    }
}
