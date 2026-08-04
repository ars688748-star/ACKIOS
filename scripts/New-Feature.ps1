param(
    [Parameter(Mandatory = $true)]
    [string]$Name
)

Write-Host ""
Write-Host "==============================="
Write-Host " ACKI Feature Generator"
Write-Host "==============================="
Write-Host ""

$steps = @(
    ".\scripts\New-Scanner.ps1",
    ".\scripts\New-Rule.ps1",
    ".\scripts\New-Recommendation.ps1",
    ".\scripts\New-RuleTest.ps1"
)

foreach ($step in $steps) {

    if (Test-Path $step) {

        & $step $Name

    }

}

if (Test-Path ".\scripts\Build.ps1") {

    Write-Host ""
    Write-Host "Running build..."
    Write-Host ""

    & ".\scripts\Build.ps1"

}

Write-Host ""
Write-Host "================================"
Write-Host " Feature completed"
Write-Host "================================"
Write-Host ""
