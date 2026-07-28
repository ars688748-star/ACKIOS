function Get-WorkflowDashboardContext
{
    [PSCustomObject]@{
        Health      = Get-WorkflowHealth
        Metrics     = Get-WorkflowMetrics
        Analytics   = Get-WorkflowAnalytics
        Trend       = Get-WorkflowTrend
        Insights    = Get-WorkflowInsights
        Decision    = Get-WorkflowDecision
        History     = @(Get-WorkflowHistory)
        GeneratedAt = Get-Date
    }
}
