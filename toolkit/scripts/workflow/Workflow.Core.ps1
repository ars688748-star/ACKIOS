. "$PSScriptRoot\..\core\PowerShellRuntime.ps1"

Test-AckiosRuntime
Set-StrictMode -Version Latest

$ErrorActionPreference = "Stop"

. "$PSScriptRoot\..\lib\Common.ps1"
. "$PSScriptRoot\..\lib\Path.ps1"
. "$PSScriptRoot\..\lib\Project.ps1"

. "$PSScriptRoot\..\repository\Repository.Core.ps1"
. "$PSScriptRoot\Roadmap.Core.ps1"

# Workflow Engine Core

# ========================================
# Legacy model loading disabled
# ========================================

. "$PSScriptRoot\generated\Workflow.Models.ps1"
. "$PSScriptRoot\analytics\WorkflowContextBuilder.ps1"

. "$PSScriptRoot\Workflow.Services.Loader.ps1"
. "$PSScriptRoot\Workflow.History.Loader.ps1"
. "$PSScriptRoot\Workflow.Analytics.Loader.ps1"





























