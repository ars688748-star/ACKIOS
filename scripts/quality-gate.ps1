Write-Host ""
Write-Host "==========================================="
Write-Host "         ACKI OS QUALITY GATE v3"
Write-Host "==========================================="

function Run-Step {
    param(
        [string]$Name,
        [scriptblock]$Action
    )

    Write-Host ""
    Write-Host ">>> $Name"

    & $Action

    if ($LASTEXITCODE -ne 0) {
        Write-Host ""
        Write-Host "==========================================="
        Write-Host "RESULT : FAILED"
        Write-Host "==========================================="
        exit $LASTEXITCODE
    }
}

Run-Step "Build" {
    npm run build
}

Run-Step "Tests" {
    npm test
}

Write-Host ""
Write-Host ">>> Git Status"

$git = git status --porcelain

if ([string]::IsNullOrWhiteSpace($git)) {

    Write-Host ""
    Write-Host "Working tree clean."
    Write-Host ""
    Write-Host "==========================================="
    Write-Host "RESULT : PASS"
    Write-Host "==========================================="

} else {

    git status --short

    Write-Host ""
    Write-Host "Working tree contains changes."
    Write-Host ""
    Write-Host "==========================================="
    Write-Host "RESULT : PASS WITH WARNINGS"
    Write-Host "==========================================="
}
