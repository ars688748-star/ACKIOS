Write-Host ""
Write-Host "==============================="
Write-Host " ACKI Developer Mode"
Write-Host "==============================="
Write-Host ""

.\scripts\Build.ps1

if ($LASTEXITCODE -ne 0) {
    exit $LASTEXITCODE
}

node dist/index.js audit

if ($LASTEXITCODE -ne 0) {
    exit $LASTEXITCODE
}

Write-Host ""
Write-Host "Development cycle completed."
Write-Host ""
