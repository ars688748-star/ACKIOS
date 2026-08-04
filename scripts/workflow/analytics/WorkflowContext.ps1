function Get-WorkflowContext
{
    $history = @(Get-WorkflowHistory)

    $analytics = Get-WorkflowAnalytics
    $metrics = Get-WorkflowMetrics
    $trend = Get-WorkflowTrend
    $insights = Get-WorkflowInsights
    $health = Get-WorkflowHealth
    $decision = Get-WorkflowDecision

    $workflowExecutionContext = New-WorkflowContext

    $intelligence = Get-WorkflowIntelligence

    $context = [WorkflowUnifiedContext]::new()

    $context.GeneratedAt = Get-Date

    $context.History = $history

    $context.Analytics = $analytics

    $context.Metrics = $metrics

    $context.Trend = $trend

    $context.Insights = $insights

    $context.Health = $health

    $context.Decision = $decision

    $context.ExecutionContext = $workflowExecutionContext

    $context.Intelligence = $intelligence

    return $context
}


