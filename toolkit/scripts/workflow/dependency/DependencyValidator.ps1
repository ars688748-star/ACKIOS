Set-StrictMode -Version Latest

. "$PSScriptRoot\DependencyRegistry.ps1"
. "$PSScriptRoot\CycleDetector.ps1"
. "$PSScriptRoot\LoadOrderValidator.ps1"

function Test-WorkflowDependencies {
    $Graph = Get-WorkflowDependencies

    foreach($Node in $Graph){
        foreach($Dependency in $Node.DependsOn){
            if(-not ($Graph.Name -contains $Dependency)){
                throw "Missing dependency: $($Node.Name) -> $Dependency"
            }
        }
    }

    Test-WorkflowDependencyCycles
    Test-WorkflowLoadOrder

    return $true
}
