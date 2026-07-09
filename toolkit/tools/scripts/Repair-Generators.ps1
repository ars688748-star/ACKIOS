$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "==============================="
Write-Host " ACKI Generator Repair"
Write-Host "==============================="
Write-Host ""

$repairs = @(
    "Fix-NewRuleTemplate.ps1",
    "Fix-NewRecommendationTemplate.ps1",
    "Fix-NewScannerTemplate.ps1",
    "Fix-NewFeatureTemplate.ps1"
)

foreach ($repair in $repairs) {

    $script = Join-Path ".\scripts" $repair

    if (Test-Path $script) {

        Write-Host "Running $repair..."
        & $script

        if ($LASTEXITCODE -ne 0) {
            exit $LASTEXITCODE
        }

    }
    else {

        Write-Host "[SKIP] $repair not found." -ForegroundColor Yellow

    }

}

Write-Host ""
Write-Host "[OK] Generator repair completed." -ForegroundColor Green
Write-Host ""
