param()

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

. "$PSScriptRoot\..\lib\Common.ps1"
. "$PSScriptRoot\..\lib\Path.ps1"
. "$PSScriptRoot\..\lib\Project.ps1"

Write-Header "ACKI Project Analyzer"

if (-not (Test-AckiProject)) {
    exit 1
}

$ProjectRoot = Resolve-AckiRoot

Write-Info "Project: $ProjectRoot"

$backupFiles = @(
    Get-ChildItem $ProjectRoot -Recurse -File -Include *.bak,*.old,*.orig -ErrorAction SilentlyContinue
)

$tempFiles = @(
    Get-ChildItem $ProjectRoot -Recurse -File -Include *.tmp,*.temp,*.log -ErrorAction SilentlyContinue
)

$emptyFolders = @(
    Get-ChildItem $ProjectRoot -Recurse -Directory -ErrorAction SilentlyContinue |
    Where-Object {
        @(Get-ChildItem $_.FullName -Force -ErrorAction SilentlyContinue).Count -eq 0
    }
)

Write-Host ""

Write-Info ("Backup files : {0}" -f $backupFiles.Count)
Write-Info ("Temp files   : {0}" -f $tempFiles.Count)
Write-Info ("Empty folders: {0}" -f $emptyFolders.Count)

Write-Host ""

Write-Success "Analysis completed."