# Repository Governance Core

$servicePath = Join-Path $PSScriptRoot "services"

Get-ChildItem $servicePath -Filter *.ps1 |
    Sort-Object Name |
    ForEach-Object {
        . $_.FullName
    }

