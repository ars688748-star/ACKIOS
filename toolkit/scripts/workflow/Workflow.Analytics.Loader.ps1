Set-StrictMode -Version Latest

$AnalyticsRoot = Join-Path $PSScriptRoot "analytics"

. (Join-Path $AnalyticsRoot "WorkflowAnalytics.ps1")
. (Join-Path $AnalyticsRoot "WorkflowContext.ps1")
. (Join-Path $AnalyticsRoot "WorkflowContextBuilder.ps1")
. (Join-Path $AnalyticsRoot "WorkflowDashboardContext.ps1")
. (Join-Path $AnalyticsRoot "WorkflowHealth.ps1")
. (Join-Path $AnalyticsRoot "WorkflowInsights.ps1")
. (Join-Path $AnalyticsRoot "WorkflowMetrics.ps1")
. (Join-Path $AnalyticsRoot "WorkflowRecoveryAnalytics.ps1")
. (Join-Path $AnalyticsRoot "WorkflowTrend.ps1")
