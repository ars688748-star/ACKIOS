$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "==============================="
Write-Host " Restore ACKI index.ts"
Write-Host "==============================="
Write-Host ""

$source = "HEAD~1"
$target = ".\src\index.ts"

try {

    $content = git show "${source}:tools/src/index.ts"

    if ($LASTEXITCODE -ne 0) {
        throw "Unable to read index.ts from Git."
    }

    $utf8 = New-Object System.Text.UTF8Encoding($false)

    [System.IO.File]::WriteAllText(
        (Resolve-Path ".").Path + "\" + $target.TrimStart(".\"),
        ($content -join [Environment]::NewLine),
        $utf8
    )

    Write-Host "[OK] index.ts restored from $source." -ForegroundColor Green

}
catch {

    Write-Host ""
    Write-Host "[ERROR] $_" -ForegroundColor Red
    Write-Host ""

    exit 1

}

Write-Host ""
