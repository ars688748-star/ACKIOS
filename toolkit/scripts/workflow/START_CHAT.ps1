Set-StrictMode -Version Latest

$ErrorActionPreference = "Stop"

. "$PSScriptRoot\Workflow.Core.ps1"
. "$PSScriptRoot\Roadmap.Core.ps1"

Initialize-Workflow

$brain = Test-WorkflowBrain

if ($brain.Ready) {
    Write-Host "[ OK ] Brain Runtime" -ForegroundColor Green
}
else {
    Write-Host "[FAIL] Brain Runtime" -ForegroundColor Red
}

if (Test-Roadmap) {
    Update-RoadmapFromWorkflowState
}


if (Test-Roadmap) {

    Write-Host ""
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host " ACKIOS ROADMAP" -ForegroundColor Cyan
    Write-Host "========================================" -ForegroundColor Cyan

    Get-Roadmap

    Write-Host ""

}


$state = Get-AckiWorkflowState

Ensure-StoryExists $state.CurrentStory
Ensure-StoryExists $state.NextStory
Test-Story $state.CurrentStory | Out-Null

$git = Get-GitSummary

$resolvedStory = Resolve-StoryFromGitBranch

if ($null -ne $resolvedStory) {

    Write-Host ""
    Write-Host ("Git Story detected: {0}" -f $resolvedStory.CurrentStory)

}


Generate-StartChatPrompt
$promptFile = Join-Path (Resolve-AckiRoot) ".work\context\START_CHAT_PROMPT.md"

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host " ACKIOS START CHAT" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host ("Branch            : {0}" -f $git.Branch)
Write-Host ("Commit            : {0}" -f $git.Commit)
Write-Host ("Epic   : {0}" -f $state.CurrentEpic)
Write-Host ("Story  : {0}" -f $state.CurrentStory)
Write-Host ("Build  : {0}" -f $state.Build)
Write-Host ("Tests  : {0}" -f $state.Tests)
Write-Host ("Tracked Changes   : {0}" -f $git.TrackedChanges)
Write-Host ("Untracked Files   : {0}" -f $git.UntrackedFiles)
Write-Host ("Repository Clean  : {0}" -f $git.Clean)
Write-Host ("Ready To Release  : {0}" -f $git.ReadyToRelease)

Write-Host ""

if (Test-Path $promptFile) {

    Write-Host "========================================" -ForegroundColor Yellow
    Write-Host " START CHAT PROMPT" -ForegroundColor Yellow
    Write-Host "========================================" -ForegroundColor Yellow
    Write-Host ""

    Get-Content $promptFile

}
else {

    Write-Warning "START_CHAT_PROMPT.md not found."

}

Write-Host ""
Show-WorkflowSummary
$decision = Get-WorkflowDecision

Write-Host ""
Write-Host "========================================" -ForegroundColor Magenta
Write-Host " WORKFLOW DECISION" -ForegroundColor Magenta
Write-Host "========================================" -ForegroundColor Magenta
Write-Host ""

Write-Host ("Status            : {0}" -f $decision.Status)
Write-Host ("Decision          : {0}" -f $decision.Decision)
Write-Host ("Priority          : {0}" -f $decision.Priority)

if($decision.WinningRule){

    Write-Host ("Winning Rule      : {0}" -f $decision.WinningRule)

}

if($decision.Recommendations.Count -gt 0){

    Write-Host ""
    Write-Host "Recommendations:"

    $decision.Recommendations |
    ForEach-Object {

        Write-Host (" - {0}" -f $_)

    }

}



$intelligence = Get-WorkflowIntelligence

Write-Host ""
Write-Host "========================================" -ForegroundColor Blue
Write-Host " WORKFLOW INTELLIGENCE" -ForegroundColor Blue
Write-Host "========================================" -ForegroundColor Blue
Write-Host ""

Write-Host ("Status            : {0}" -f $intelligence.Status)
Write-Host ("Performance Score : {0}" -f $intelligence.PerformanceScore)
Write-Host ("Success Rate      : {0}" -f $intelligence.SuccessRate)
Write-Host ("Trend             : {0}" -f $intelligence.Trend)
Write-Host ("Reliability Trend : {0}" -f $intelligence.ReliabilityTrend)

Write-Host ""

Write-Host ("Recommendation    : {0}" -f $intelligence.Recommendation)

if($intelligence.Recommendations.Count -gt 0){

    Write-Host ""
    Write-Host "Recommendations:"

    $intelligence.Recommendations |
    ForEach-Object {

        Write-Host (" - {0}" -f $_)

    }

}

$dashboard = Get-WorkflowExecutionDashboard

$dashboardReport = New-WorkflowDashboardReport $dashboard
Save-WorkflowDashboardReport $dashboardReport | Out-Null

$visualization = Get-WorkflowDashboardVisualization $dashboard

Show-WorkflowExecutionDashboard $visualization

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host " READY FOR DEVELOPMENT" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""






. "$PSScriptRoot\services\WorkflowReportBuilder.ps1"
. "$PSScriptRoot\services\WorkflowRenderer.ps1"
. "$PSScriptRoot\services\WorkflowDashboardReport.ps1"





