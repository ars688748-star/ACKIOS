$ErrorActionPreference = "Stop"

$Root = "D:\ACKI-FAN-Studio\toolkit"
$Rules = Join-Path $Root "src\engine\rules"

Write-Host ""
Write-Host "=== ACKI Rule API v2 Migration ===" -ForegroundColor Cyan
Write-Host ""

Get-ChildItem $Rules -Filter *.ts | ForEach-Object {

    $content = Get-Content $_.FullName -Raw

    # analyze(workspace) -> analyze(context)
    $content = $content -replace 'analyze\s*\(\s*workspace\s*:\s*WorkspaceState\s*\)', 'analyze(context: RuleContext)'

    # _workspace -> context
    $content = $content -replace '_workspace\s*:\s*WorkspaceState', 'context: RuleContext'

    # workspace -> context.workspace
    $content = $content -replace '\bworkspace\b', 'context.workspace'

    Set-Content $_.FullName $content -Encoding UTF8

    Write-Host "Updated $($_.Name)"
}

Write-Host ""
Write-Host "Done."