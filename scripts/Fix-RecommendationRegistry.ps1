$ErrorActionPreference = "Stop"

$file = ".\src\engine\RecommendationRegistry.ts"

$content = Get-Content $file -Raw

$content = $content -replace '(?m)^import \{ RepositoryRecommendation \} from "\./recommendations/RepositoryRecommendation\.js";\r?\n', ''

$utf8 = New-Object System.Text.UTF8Encoding($false)

[System.IO.File]::WriteAllText(
    (Resolve-Path $file),
    $content,
    $utf8
)

Write-Host ""
Write-Host "[OK] RecommendationRegistry fixed." -ForegroundColor Green
Write-Host ""
