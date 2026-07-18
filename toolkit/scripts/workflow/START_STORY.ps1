Set-StrictMode -Version Latest

$ErrorActionPreference = "Stop"

. "$PSScriptRoot\Workflow.Core.ps1"

Initialize-Workflow

$state = Get-AckiWorkflowState


Set-StoryStatus $state.CurrentStory "In Progress" | Out-Null
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host " ACKIOS START STORY" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host ("Epic      : {0}" -f $state.CurrentEpic)
Write-Host ("Story     : {0}" -f $state.CurrentStory)
Write-Host ("Next Story: {0}" -f $state.NextStory)

Write-Host ""

$story = Get-Story $state.CurrentStory

Write-Host ""
Write-Host "========================================"
Write-Host " CURRENT STORY"
Write-Host "========================================"
Write-Host ""

if ($null -ne $story) {
    Write-Host ("Story       : {0}" -f $story.Id)
    Write-Host ("Title       : {0}" -f $story.Title)
    Write-Host ("Description : {0}" -f $story.Description)
    Write-Host ("Status      : {0}" -f $story.Status)
}
else {
    Write-Host "Story not found."
}


