class WorkflowIntelligenceResult {

    [string]$Status

    [int]$PerformanceScore

    [double]$SuccessRate

    [string]$Trend

    [string]$DurationTrend

    [string]$ReliabilityTrend

    [string]$Recommendation

    [WorkflowRecoveryAnalyticsResult]$RecoveryAnalytics

    [string[]]$Recommendations

}


