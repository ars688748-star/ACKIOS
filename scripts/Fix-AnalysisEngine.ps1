$ErrorActionPreference = "Stop"

$file = ".\src\engine\AnalysisEngine.ts"

$content = Get-Content $file -Raw

$content = $content -replace '(?m)^import \{ HomepageRule \} from "\./rules/HomepageRule\.js";\r?\n',''

$utf8 = New-Object System.Text.UTF8Encoding($false)

[System.IO.File]::WriteAllText(
    (Resolve-Path $file),
    $content,
    $utf8
)

Write-Host ""
Write-Host "[OK] AnalysisEngine fixed." -ForegroundColor Green
Write-Host ""
