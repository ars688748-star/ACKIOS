Set-StrictMode -Version Latest

$ErrorActionPreference = "Stop"

. "$PSScriptRoot\Workflow.Core.ps1"

Initialize-Workflow

$state = Get-AckiWorkflowState

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host " ACKIOS START STORY" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host ("Epic      : {0}" -f $state.CurrentEpic)
Write-Host ("Story     : {0}" -f $state.CurrentStory)
Write-Host ("Next Story: {0}" -f $state.NextStory)

Write-Host ""

Get-Content (Join-Path (Resolve-AckiRoot) "docs\context\NEXT_STORY.md")
