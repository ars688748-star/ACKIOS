function Get-PlanningContext
{
    $context = [PlanningContextResult]::new()

    $context.GeneratedAt = Get-Date

    $knowledge = (Get-BrainService Knowledge).Invoke()

    $tasks = @()

    foreach($fact in $knowledge.Facts)
    {
        $tasks += [PSCustomObject]@{
            Name = "Analyze $($fact.Source)"
            Source = $fact.Source
            Priority = 1
        }
    }

    $context.Goals = @("Build execution plan")
    $context.Tasks = $tasks
    $context.Count = $tasks.Count
    $context.Status = "Ready"

    return $context
}
