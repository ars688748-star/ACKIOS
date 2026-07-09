param()

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

. "$PSScriptRoot\..\lib\Common.ps1"
. "$PSScriptRoot\..\lib\Path.ps1"

Write-Header "ACKI Structure Verification"

$root = Resolve-AckiRoot

$items = @(
    "package.json",
    "tsconfig.json",
    "README.md",
    ".gitignore",
    "src",
    "scripts"
)

$errors = 0

foreach ($item in $items) {

    $target = Join-Path $root $item

    if (Test-Path $target) {

        Write-Success "$item"

    }
    else {

        Write-ErrorMessage "$item"

        $errors++

    }

}

Write-Host ""

if ($errors -eq 0) {

    Write-Success "Project structure verified."

}
else {

    Write-WarningMessage "$errors required item(s) missing."

    exit 1

}