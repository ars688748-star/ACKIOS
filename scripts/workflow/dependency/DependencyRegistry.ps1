Set-StrictMode -Version Latest

. "$PSScriptRoot\WorkflowDependency.ps1"

function Get-WorkflowDependencies {
    @(
        [WorkflowDependency]::new("Models",@())
        [WorkflowDependency]::new("Services",@("Models"))
        [WorkflowDependency]::new("Analytics",@("Services"))
        [WorkflowDependency]::new("History",@("Analytics"))
        [WorkflowDependency]::new("Storage",@("History"))
    )
}
