Set-StrictMode -Version Latest

$ErrorActionPreference = "Stop"

. "$PSScriptRoot\Workflow.Core.ps1"

Initialize-Workflow

$git = Get-GitSummary

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host " ACKIOS Workflow Status" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host ("Branch            : {0}" -f $git.Branch)
Write-Host ("Commit            : {0}" -f $git.Commit)
Write-Host ("Tracked Changes   : {0}" -f $git.TrackedChanges)
Write-Host ("Untracked Files   : {0}" -f $git.UntrackedFiles)
Write-Host ("Repository Clean  : {0}" -f $git.Clean)
Write-Host ("Ready To Release  : {0}" -f $git.ReadyToRelease)

Write-Host ""


