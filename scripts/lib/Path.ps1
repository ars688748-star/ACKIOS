Set-StrictMode -Version Latest

$ErrorActionPreference = "Stop"

function Resolve-AckiRoot {

    return (
        Resolve-Path (
            Join-Path $PSScriptRoot "..\.."
        )
    ).Path

}

function Resolve-ScriptsPath {

    Join-Path (Resolve-AckiRoot) "scripts"

}

function Resolve-SourcePath {

    Join-Path (Resolve-AckiRoot) "src"

}

function Resolve-OutputPath {

    Join-Path (Resolve-AckiRoot) ".acki"

}

function Resolve-ReportsPath {

    Join-Path (Resolve-OutputPath) "reports"

}