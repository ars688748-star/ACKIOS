param(
    [switch]$WhatIf
)

# ========================================
# ACKIOS Repository Normalize
# ========================================

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

. "$PSScriptRoot\..\workflow\Workflow.Core.ps1"

Initialize-Workflow

Write-Host ""
Write-Host "========================================"
Write-Host " ACKIOS Repository Normalize"
Write-Host "========================================"
Write-Host ""

$RepositoryRoot = Resolve-Path "$PSScriptRoot\..\.."

$Rules = @(
    @{ Pattern = "report.html";                 Target = "docs\reports" }
    @{ Pattern = "report.json";                 Target = "docs\reports" }
    @{ Pattern = "report.md";                   Target = "docs\reports" }
    @{ Pattern = "ACKI_RUNTIME_FULL_AUDIT.md";  Target = "docs\audits" }
    @{ Pattern = "DEPENDENCY_AUDIT.md";         Target = "docs\audits" }
    @{ Pattern = "ACKI_PROJECT_EXPORT.txt";     Target = "docs\project" }
    @{ Pattern = "project_tree.txt";            Target = "docs\project" }
    @{ Pattern = "typescript_files.txt";        Target = "docs\project" }
    @{ Pattern = "ACKIOS_*AUDIT*.txt";     Target = "docs\audits" }
    @{ Pattern = "*_AUDIT.txt";            Target = "docs\audits" }
    @{ Pattern = "Architecture*.txt";      Target = "docs\architecture" }
    @{ Pattern = "ACKIOS_PUBLIC_API.txt";  Target = "docs\api" }
    @{ Pattern = "ROADMAP*.txt";           Target = "docs\roadmap" }
    @{ Pattern = "PROJECT_STATUS*.txt";    Target = "docs\status" }
)

function Move-FilesByRule {

    param([hashtable]$Rule)

    $Target = Join-Path $RepositoryRoot $Rule.Target

    if (!(Test-Path $Target)) {
        New-Item -ItemType Directory -Force -Path $Target | Out-Null
    }

    Get-ChildItem `
        -Path $RepositoryRoot `
        -File `
        -Filter $Rule.Pattern |
    ForEach-Object {

        if ($WhatIf) {

            Write-Host ("[PLAN] {0} -> {1}" -f $_.Name,$Rule.Target)

        }
        else {

            Move-Item `
                $_.FullName `
                $Target `
                -Force

            Write-Host ("[ OK ] {0} -> {1}" -f $_.Name,$Rule.Target)
        }
    }
}

foreach ($Rule in $Rules) {
    Move-FilesByRule $Rule
}

Write-Host ""
Write-Host "[ OK ] Repository normalization completed."


