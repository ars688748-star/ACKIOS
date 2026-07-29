Set-StrictMode -Version Latest

. "$PSScriptRoot\DependencyRegistry.ps1"

function Get-WorkflowDependencyGraph {
    Get-WorkflowDependencies |
    Select-Object Name, DependsOn
}
