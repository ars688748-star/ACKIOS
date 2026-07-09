$ErrorActionPreference = "Stop"

$map = @{
    "GitRepositoryRule.ts"   = "repository"
    "RepositoryRule.ts"      = "repository"
    "ReadmeRule.ts"          = "documentation"
    "LicenseRule.ts"         = "documentation"
    "PackageLicenseRule.ts"  = "package"
    "PackageManagerRule.ts"  = "package"
    "EnginesRule.ts"         = "package"
    "TypeScriptRule.ts"      = "typescript"
    "SecurityRule.ts"        = "security"
    "HomepageRule.ts"        = "project"
}

$rules = ".\src\engine\rules"

foreach ($item in $map.GetEnumerator()) {

    $file = Join-Path $rules $item.Key

    if (!(Test-Path $file)) {
        continue
    }

    $content = Get-Content $file -Raw

    $content = [regex]::Replace(
        $content,
        '(?ms)(id:\s*"[^"]+",)\s*(severity:)',
        "`$1`r`n                category: `"$($item.Value)`",`r`n`$2"
    )

    $utf8 = New-Object System.Text.UTF8Encoding($false)

    [System.IO.File]::WriteAllText(
        (Resolve-Path $file),
        $content,
        $utf8
    )

    Write-Host "Updated $($item.Key)"
}

Write-Host ""
Write-Host "[OK] Categories added." -ForegroundColor Green
