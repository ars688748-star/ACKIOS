param(
    [Parameter(Mandatory = $true)]
    [string]$Name
)

$ErrorActionPreference = "Stop"

& ".\scripts\Rebuild-RuleRegistry.ps1"

Write-Host ""
Write-Host "Registered $Name" -ForegroundColor Green
Write-Host ""
