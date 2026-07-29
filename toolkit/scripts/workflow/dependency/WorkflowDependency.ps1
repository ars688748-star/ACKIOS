Set-StrictMode -Version Latest

class WorkflowDependency {
    [string]$Name
    [string[]]$DependsOn

    WorkflowDependency(
        [string]$Name,
        [string[]]$DependsOn
    ){
        $this.Name = $Name
        $this.DependsOn = $DependsOn
    }
}
