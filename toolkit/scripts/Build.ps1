. "$PSScriptRoot\Common.ps1"

Write-Header "ACKI Build"

Write-Host "TypeScript"
Write-Host ""

npm run build
if ($LASTEXITCODE -ne 0) {
    Write-ErrorMessage "TypeScript build failed."
    exit $LASTEXITCODE
}

Write-Host ""
Write-Host "ESLint"
Write-Host ""

npm run lint
if ($LASTEXITCODE -ne 0) {
    Write-ErrorMessage "ESLint failed."
    exit $LASTEXITCODE
}

Write-Host ""
Write-Host "Vitest"
Write-Host ""

npm test
if ($LASTEXITCODE -ne 0) {
    Write-ErrorMessage "Tests failed."
    exit $LASTEXITCODE
}

Write-Host ""

Write-Success "Build completed successfully."
