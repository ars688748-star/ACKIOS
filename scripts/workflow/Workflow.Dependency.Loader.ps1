Set-StrictMode -Version Latest

$DependencyRoot = Join-Path $PSScriptRoot "dependency"

. (Join-Path $DependencyRoot "WorkflowDependency.ps1")
. (Join-Path $DependencyRoot "DependencyRegistry.ps1")
. (Join-Path $DependencyRoot "DependencyScanner.ps1")
. (Join-Path $DependencyRoot "DependencyValidator.ps1")
. (Join-Path $DependencyRoot "CycleDetector.ps1")
. (Join-Path $DependencyRoot "LoadOrderValidator.ps1")
