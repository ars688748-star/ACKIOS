Set-StrictMode -Version Latest

$ErrorActionPreference = "Stop"

. "$PSScriptRoot\LIB.ps1"

Initialize-Workflow

$git = Get-GitSummary

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host " ACKIOS Workflow Status" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host ("Branch : {0}" -f $git.Branch)
Write-Host ("Commit : {0}" -f $git.Commit)
Write-Host ("Clean  : {0}" -f $git.Clean)

Write-Host ""
