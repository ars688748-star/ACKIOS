$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "==============================="
Write-Host " Restore tools/index.ts"
Write-Host "==============================="
Write-Host ""

$content = git show HEAD~1:tools/src/index.ts

if ($LASTEXITCODE -ne 0) {
    throw "Cannot restore tools/src/index.ts"
}

$target = ".\tools\src\index.ts"

$utf8 = New-Object System.Text.UTF8Encoding($false)

[System.IO.File]::WriteAllText(
    (Resolve-Path ".").Path + "\" + $target.TrimStart(".\"),
    ($content -join [Environment]::NewLine),
    $utf8
)

Write-Host "[OK] tools/src/index.ts restored." -ForegroundColor Green
Write-Host ""
