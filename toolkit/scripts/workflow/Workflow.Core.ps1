Set-StrictMode -Version Latest

$ErrorActionPreference = "Stop"

. "$PSScriptRoot\..\lib\Common.ps1"
. "$PSScriptRoot\..\lib\Path.ps1"
. "$PSScriptRoot\..\lib\Project.ps1"

. "$PSScriptRoot\..\repository\Repository.Core.ps1"
. "$PSScriptRoot\Roadmap.Core.ps1"

# Workflow Engine Core

$modelPath = Join-Path $PSScriptRoot "models"

. (Join-Path $modelPath "WorkflowStatus.ps1")
. (Join-Path $modelPath "StoryCatalogValidationResult.ps1")
. (Join-Path $modelPath "StoryInfo.ps1")
. (Join-Path $modelPath "WorkflowHealth.ps1")
. (Join-Path $modelPath "WorkflowStepResult.ps1")

$servicePath = Join-Path $PSScriptRoot "services"

Get-ChildItem $servicePath -Filter *.ps1 |
    Sort-Object Name |
    ForEach-Object {
        . $_.FullName
    }

