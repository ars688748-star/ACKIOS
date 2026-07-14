Set-StrictMode -Version Latest

$ErrorActionPreference = "Stop"

. "$PSScriptRoot\LIB.ps1"

Initialize-Workflow

$state = Get-AckiWorkflowState

$promptFile = Join-Path (Resolve-AckiRoot) ".work\context\START_CHAT_PROMPT.md"

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host " ACKIOS START CHAT" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host ("Branch : {0}" -f $state.Branch)
Write-Host ("Commit : {0}" -f $state.Commit)
Write-Host ("Epic   : {0}" -f $state.CurrentEpic)
Write-Host ("Story  : {0}" -f $state.CurrentStory)
Write-Host ("Build  : {0}" -f $state.Build)
Write-Host ("Tests  : {0}" -f $state.Tests)
Write-Host ("Clean  : {0}" -f $state.RepositoryClean)

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

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host " READY FOR DEVELOPMENT" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

