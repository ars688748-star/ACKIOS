Set-StrictMode -Version Latest

. "$PSScriptRoot\DependencyRegistry.ps1"

function Test-WorkflowLoadOrder {
    $Graph = Get-WorkflowDependencies
    $Index = @{}

    for($i = 0; $i -lt $Graph.Count; $i++){
        $Index[$Graph[$i].Name] = $i
    }

    foreach($Node in $Graph){
        foreach($Dependency in $Node.DependsOn){
            if($Index[$Dependency] -gt $Index[$Node.Name]){
                throw "Invalid load order: $($Node.Name) depends on $Dependency"
            }
        }
    }

    $true
}
