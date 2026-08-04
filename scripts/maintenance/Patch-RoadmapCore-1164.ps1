# ========================================
# ACKIOS Patch 116.4
# Roadmap Engine - Phase 1
# ========================================

$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host " ACKIOS PATCH 116.4" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$Root = Resolve-Path "$PSScriptRoot\..\.."

$RoadmapCore = Join-Path $Root "scripts\workflow\Roadmap.Core.ps1"

if (!(Test-Path $RoadmapCore)) {

    throw "Roadmap.Core.ps1 not found."

}

Write-Host "[ OK ] Roadmap.Core.ps1 found."

Write-Host ""
Write-Host "Patch framework ready."
Write-Host ""


# ---------- Backup ----------

$Backup = "$RoadmapCore.bak_{0}" -f (Get-Date -Format "yyyyMMdd_HHmmss")

Copy-Item `
    $RoadmapCore `
    $Backup `
    -Force

Write-Host "[ OK ] Backup created:"
Write-Host "      $Backup"

# ---------- Read ----------

$Content = Get-Content `
    $RoadmapCore `
    -Raw

Write-Host "[ OK ] Roadmap.Core.ps1 loaded."

