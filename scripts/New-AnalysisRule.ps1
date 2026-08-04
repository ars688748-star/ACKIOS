param(
    [Parameter(Mandatory = $true)]
    [string]$Name
)

$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "==============================="
Write-Host " ACKI Analysis Rule Generator"
Write-Host "==============================="
Write-Host ""

#
# Rule
#
& ".\scripts\New-Rule.ps1" $Name

#
# Recommendation
#
& ".\scripts\New-Recommendation.ps1" $Name

#
# Test
#
& ".\scripts\New-RuleTest.ps1" $Name

#
# Build
#
Write-Host ""
Write-Host "Running build..."
Write-Host ""

& ".\scripts\Build.ps1"

if ($LASTEXITCODE -ne 0) {

    Write-Host ""
    Write-Host "[ERROR] Build failed." -ForegroundColor Red
    exit $LASTEXITCODE

}

Write-Host ""
Write-Host "================================"
Write-Host " Analysis Rule completed"
Write-Host "================================"
Write-Host ""
