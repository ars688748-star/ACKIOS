Set-StrictMode -Version Latest

$ErrorActionPreference = "Stop"

. "$PSScriptRoot\..\lib\Common.ps1"
. "$PSScriptRoot\..\lib\Path.ps1"
. "$PSScriptRoot\..\lib\Project.ps1"

. "$PSScriptRoot\..\repository\Repository.Core.ps1"
# Workflow Engine Core

$servicePath = Join-Path $PSScriptRoot "services"

Get-ChildItem $servicePath -Filter *.ps1 |
    Sort-Object Name |
    ForEach-Object {

        . $_.FullName

    }

