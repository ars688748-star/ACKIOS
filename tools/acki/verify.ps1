Write-Host ""
Write-Host "=== ACKIOS VERIFY ==="

$failed = $false

Write-Host ""
Write-Host "[1/5] Git Status"
git status --short
if ($LASTEXITCODE -ne 0) { $failed = $true }

Write-Host ""
Write-Host "[2/5] TypeScript"
$tsc = Get-Command tsc -ErrorAction SilentlyContinue
if ($tsc) {
    tsc --noEmit
    if ($LASTEXITCODE -ne 0) { $failed = $true }
}
else {
    Write-Host "SKIPPED"
}

Write-Host ""
Write-Host "[3/5] Tests"
if (Test-Path package.json) {
    npm test
    if ($LASTEXITCODE -ne 0) { $failed = $true }
}
else {
    Write-Host "SKIPPED"
}

Write-Host ""
Write-Host "[4/5] Backup Files"
Get-ChildItem -Recurse -Include *.backup.* | Select-Object FullName

Write-Host ""
Write-Host "[5/5] Result"

if ($failed) {
    Write-Host "VERIFY FAILED"
    exit 1
}

Write-Host "VERIFY PASSED"
exit 0
