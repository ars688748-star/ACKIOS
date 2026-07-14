Set-StrictMode -Version Latest

$ErrorActionPreference = "Stop"

. "$PSScriptRoot\LIB.ps1"

Initialize-Workflow

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host " ACKIOS START CHAT" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$git = Get-GitSummary

Write-Host ("Branch : {0}" -f $git.Branch)
Write-Host ("Commit : {0}" -f $git.Commit)
Write-Host ("Clean  : {0}" -f $git.Clean)

Write-Host ""

Invoke-Build

Write-Host ""
Write-Host "Development session initialized."
Write-Host ""
