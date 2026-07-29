# =======================================
# AUTO-GENERATED - DO NOT EDIT
# Workflow Models
# =======================================


# ===== RepositoryBoundaryResult.ps1 =====

function New-RepositoryBoundaryResult {

    return [PSCustomObject]@{

        Passed = $true

        Errors = @()

        Warnings = @()

        PrivateAreaDetected = $false

        WorkAreaDetected = $false

        GitIndexClean = $true

        ForbiddenFiles = @()

        CheckedAt = Get-Date

        CheckedBy = "RepositoryBoundaryChecker"

    }

}

# ===== RoadmapModel.ps1 =====

class RoadmapModel {

    [string]$Version = "1.0"

    [string]$Status = "Living"

    [string]$Phase

    [string]$Release

    [string]$Progress

    [string]$CurrentEpic

    [string]$CurrentStory

    [string]$NextStory

    [string[]]$Roadmap

    [string[]]$NextTasks

}

# ===== RoadmapState.ps1 =====


# ===== StoryCatalogValidationResult.ps1 =====

class StoryCatalogValidationResult {

    [int]$Total

    [int]$Valid

    [int]$Warnings

    [array]$Issues

}


# ===== StoryInfo.ps1 =====

class StoryInfo {

    [string]$Id

    [string]$Title

    [string]$Status

    [string]$Description

}

# ===== WorkflowContextResult.ps1 =====

class WorkflowContextResult
{
    [datetime]$GeneratedAt

    [object[]]$History

    [int]$TotalRuns

    [int]$PassRuns

    [int]$WarningRuns

    [int]$FailureRuns

    [double]$AverageDurationMs

    [double]$FastestRun

    [double]$SlowestRun
}

# ===== WorkflowDecisionResult.ps1 =====

class WorkflowDecisionResult {

    [string]$Status

    [string]$Decision

    [string]$Priority

[string]$WinningRule

[object[]]$ExecutedRules

[double]$TotalDurationMs

    [string[]]$Recommendations

    [string[]]$Warnings

    WorkflowDecisionResult() {

        $this.Status = "UNKNOWN"
        $this.Decision = ""
        $this.Priority = "NORMAL"

$this.WinningRule = ""

$this.ExecutedRules = @()

$this.TotalDurationMs = 0
        $this.Recommendations = @()
        $this.Warnings = @()

    }

}


# ===== WorkflowDiagnosticsResult.ps1 =====

class WorkflowDiagnosticsResult {

    [string]$Services

    [string]$Models

    [string]$State

    [string]$Roadmap

    [string]$History

    [bool]$Passed

    [string[]]$Failures

}

# ===== WorkflowExecutionRecord.ps1 =====

class WorkflowExecutionRecord {

    [string]$Id
    [string]$Timestamp

    [string]$Branch
    [string]$Commit

    [string]$Epic
    [string]$Story

    [string]$Build
    [string]$Tests

    [object]$QualityGate

    [string]$Status

    WorkflowExecutionRecord() {
        $this.Timestamp = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")
    }
}


# ===== WorkflowExecutionReport.ps1 =====


class WorkflowExecutionReport {

    [WorkflowStepResult[]]$Steps = @()

    [WorkflowStatus]$Status

    [timespan]$Duration

    [int]$Succeeded

    [int]$Failed

}

# ===== WorkflowHealth.ps1 =====



class WorkflowHealth {

    [WorkflowStatus]$Repository

    [WorkflowStatus]$Build

    [WorkflowStatus]$Tests

    [StoryCatalogValidationResult]$StoryCatalog

    [WorkflowStatus]$Roadmap

    [WorkflowStatus]$Release

    [WorkflowQualityGateResult]$QualityGate

    [WorkflowStatus]$Overall

}




# ===== WorkflowIntelligenceResult.ps1 =====

class WorkflowIntelligenceResult {

    [string]$Status

    [int]$PerformanceScore

    [double]$SuccessRate

    [string]$Trend

    [string]$DurationTrend

    [string]$ReliabilityTrend

    [string]$Recommendation

    [WorkflowRecoveryAnalyticsResult]$RecoveryAnalytics

    [WorkflowDecisionResult]$Decision

    [string[]]$Recommendations

}




# ===== WorkflowIssue.ps1 =====

class WorkflowIssue {

    [string]$Type

    [string]$Component

    [string]$Expected

    [string]$Actual

    [string]$File

    [string]$Message

}

# ===== WorkflowPipelineRecord.ps1 =====

class WorkflowPipelineRecord {

    [string]$Name

    [string]$Status

    [int]$TotalSteps

    [int]$PassedSteps

    [int]$FailedSteps

    [double]$SuccessRate

    [string]$Duration

}

# ===== WorkflowPipelineResult.ps1 =====

class WorkflowPipelineResult {

    [string]$Name

    [array]$Steps

    [string]$Status

    [datetime]$Started

    [datetime]$Finished

    [timespan]$Duration

    [int]$TotalSteps

    [int]$PassedSteps

    [int]$FailedSteps

    [double]$SuccessRate

}

# ===== WorkflowQualityGateResult.ps1 =====

class WorkflowQualityGateResult {

    [bool]$Passed

    [string]$Repository

    [string]$Build

    [string]$Tests

    [string]$StoryCatalog

    [string]$Roadmap

    [string]$BackupFiles

    [string]$Diagnostics

    [string]$StateConsistency

    [string[]]$Failures

    [object[]]$Issues

}

# ===== WorkflowRecoveryAnalyticsResult.ps1 =====

class WorkflowRecoveryAnalyticsResult {

    [int]$TotalRecoveries

    [int]$SuccessfulRecoveries

    [int]$FailedRecoveries

    [double]$RecoveryRate

    [string]$LastRecovery

    [string]$LastAction

}

# ===== WorkflowRuleRegistration.ps1 =====

class WorkflowRuleRegistration {

    [string]$Name
    [string]$Function
    [string]$Category
    [string]$Priority
    [bool]$Enabled

    WorkflowRuleRegistration(){

        $this.Enabled = $true

    }

}

# ===== WorkflowRuleResult.ps1 =====

class WorkflowRuleResult {

    [string]$Rule

    [string]$Status

    [string]$Decision

    [string]$Priority

[datetime]$StartedAt

[datetime]$FinishedAt

[double]$DurationMs

    [string[]]$Recommendations

    [string[]]$Warnings

    [bool]$StopPipeline

    WorkflowRuleResult() {

        $this.Rule = ""
        $this.Status = "UNKNOWN"
        $this.Decision = ""
        $this.Priority = "NORMAL"

$this.StartedAt = Get-Date
$this.FinishedAt = $this.StartedAt
$this.DurationMs = 0
        $this.StopPipeline = $false
        $this.Recommendations = @()
        $this.Warnings = @()

    }

}


# ===== WorkflowStateIssue.ps1 =====

class WorkflowStateIssue {

    [string]$Type

    [string]$Component

    [string]$Expected

    [string]$Actual

    [string]$File

    [string]$Message

}

# ===== WorkflowStateValidationResult.ps1 =====

class WorkflowStateValidationResult {

    [string]$StateFile

    [string]$RoadmapSync

    [string]$NextStorySync

    [bool]$Passed

    [string[]]$Failures

    [WorkflowStateIssue[]]$Issues

}

# ===== WorkflowStatus.ps1 =====

enum WorkflowStatus {

    PASS

    WARN

    FAIL

}

# ===== WorkflowStepResult.ps1 =====


class WorkflowStepResult {

    [string]$Name

    [WorkflowStatus]$Status

    [datetime]$Started

    [datetime]$Finished

    [timespan]$Duration

    [string]$Error

}

# ===== WorkflowTrendResult.ps1 =====

class WorkflowTrendResult {

    [string]$DurationTrend

    [string]$ReliabilityTrend

    [string]$OverallTrend

    [string]$Recommendation

}

# ===== WorkflowUnifiedContext.ps1 =====

class WorkflowUnifiedContext {

    [datetime]$GeneratedAt

    [object]$History

    [WorkflowContextResult]$ExecutionContext

    [object]$Analytics

    [object]$Metrics

    [object]$Trend

    [object]$Insights

    [object]$Health

    [object]$Decision

    [object]$Intelligence

}

