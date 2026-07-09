Set-StrictMode -Version Latest

$ErrorActionPreference = "Stop"

. "$PSScriptRoot\Common.ps1"
. "$PSScriptRoot\Path.ps1"

function Test-AckiProject {

    $required = @(
        "package.json",
        "src",
        "scripts"
    )

    $root = Resolve-AckiRoot

    foreach ($item in $required) {

        $path = Join-Path $root $item

        if (!(Test-Path $path)) {

            Write-ErrorMessage "Missing: $item"

            return $false

        }

    }

    Write-Success "ACKI project verified."

    return $true

}