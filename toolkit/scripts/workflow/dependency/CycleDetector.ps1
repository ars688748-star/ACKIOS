Set-StrictMode -Version Latest

. "$PSScriptRoot\DependencyRegistry.ps1"

function Test-WorkflowDependencyCycles {
    $Graph = Get-WorkflowDependencies

    foreach($Node in $Graph){
        if($Node.DependsOn -contains $Node.Name){
            throw "Circular dependency: $($Node.Name) -> $($Node.Name)"
        }
    }

    $true
}
