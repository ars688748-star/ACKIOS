function Initialize-BrainServices
{
    $services = @(
        @{ Name = "Workflow";   Factory = ${function:New-WorkflowContext} },
        @{ Name = "Memory";     Factory = ${function:Get-MemoryContext} },
        @{ Name = "Knowledge";  Factory = ${function:Get-KnowledgeContext} },
        @{ Name = "Planning";   Factory = ${function:Get-PlanningContext} },
        @{ Name = "Decision";   Factory = ${function:Get-DecisionContext} },
        @{ Name = "Execution";  Factory = ${function:Get-ExecutionContext} },
        @{ Name = "Reflection"; Factory = ${function:Get-ReflectionContext} }
    )

    foreach($service in $services)
    {
        if (-not (Get-BrainService $service.Name))
        {
            Register-BrainService `
                -Name $service.Name `
                -Service $service.Factory
        }
    }
}
