function Get-DecisionContext
{
    $context = [DecisionContextResult]::new()

    $context.GeneratedAt = Get-Date

    $plan = (Get-BrainService Planning).Invoke()

    $context.Candidates = $plan.Tasks

    if($plan.Tasks.Count -gt 0)
    {
        $context.SelectedAction = $plan.Tasks[0].Name
        $context.Reason = "Highest priority task."
    }

    $context.Status = "Ready"

    return $context
}
