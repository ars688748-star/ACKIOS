param(
    [Parameter(Mandatory = $true)]
    [string]$Name
)

$ErrorActionPreference = "Stop"

& ".\scripts\Rebuild-RecommendationRegistry.ps1"

Write-Host ""
Write-Host "Registered $Name" -ForegroundColor Green
Write-Host ""
