. "$PSScriptRoot\..\core\PowerShellRuntime.ps1"

Test-AckiosRuntime
Set-StrictMode -Version Latest

$ErrorActionPreference = "Stop"

. "$PSScriptRoot\..\lib\Common.ps1"
. "$PSScriptRoot\..\lib\Path.ps1"
. "$PSScriptRoot\..\lib\Project.ps1"

. "$PSScriptRoot\..\repository\Repository.Core.ps1"
. "$PSScriptRoot\Roadmap.Core.ps1"

# Workflow Engine Core

$modelPath = Join-Path $PSScriptRoot "models"

. (Join-Path $modelPath "WorkflowStatus.ps1")
. (Join-Path $modelPath "StoryCatalogValidationResult.ps1")
. (Join-Path $modelPath "StoryInfo.ps1")
. (Join-Path $modelPath "WorkflowIssue.ps1")
. (Join-Path $modelPath "WorkflowQualityGateResult.ps1")
. (Join-Path $modelPath "WorkflowStateIssue.ps1")
. (Join-Path $modelPath "WorkflowStateValidationResult.ps1")
. (Join-Path $modelPath "WorkflowHealth.ps1")
. (Join-Path $modelPath "WorkflowStepResult.ps1")
. (Join-Path $modelPath "WorkflowPipelineResult.ps1")
. (Join-Path $modelPath "WorkflowPipelineRecord.ps1")
. (Join-Path $modelPath "WorkflowIntelligenceResult.ps1")
. (Join-Path $modelPath "WorkflowRecoveryAnalyticsResult.ps1")
. (Join-Path $modelPath "WorkflowTrendResult.ps1")
. (Join-Path $modelPath "WorkflowDiagnosticsResult.ps1")
. (Join-Path $modelPath "WorkflowDecisionResult.ps1")
. (Join-Path $modelPath "WorkflowRuleResult.ps1")
. (Join-Path $modelPath "WorkflowRuleRegistration.ps1")
. (Join-Path $modelPath "WorkflowContextResult.ps1")
. "$PSScriptRoot\analytics\WorkflowContextBuilder.ps1"

. "$PSScriptRoot\services\WorkflowRecommendationEngine.ps1"

$servicePath = Join-Path $PSScriptRoot "services"

Get-ChildItem $servicePath -Filter *.ps1 |
    Where-Object {
        $_.Name -notmatch "\.bak$|\.before|\.story"
    } |
    Sort-Object Name |
    ForEach-Object {
        . $_.FullName
    }






. "$PSScriptRoot\services\WorkflowExecutionTrace.ps1"
. "$PSScriptRoot\services\WorkflowDashboardReport.ps1"


. "$PSScriptRoot\history\WorkflowHistory.ps1"
. "$PSScriptRoot\analytics\WorkflowAnalytics.ps1"
. "$PSScriptRoot\analytics\WorkflowTrend.ps1"
. "$PSScriptRoot\analytics\WorkflowInsights.ps1"
. "$PSScriptRoot\analytics\WorkflowMetrics.ps1"
. "$PSScriptRoot\analytics\WorkflowRecoveryAnalytics.ps1"
. "$PSScriptRoot\analytics\WorkflowHealth.ps1"
. "$PSScriptRoot\analytics\WorkflowDashboardContext.ps1"
. "$PSScriptRoot\analytics\WorkflowContext.ps1"


























