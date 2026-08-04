function Get-KnowledgeContext
{
    $context = [KnowledgeContextResult]::new()

    $context.GeneratedAt = Get-Date

    $workflow = (Get-BrainService Workflow).Invoke()
    $memory   = (Get-BrainService Memory).Invoke()

    $facts = @()

    $facts += [PSCustomObject]@{
        Source = "Workflow"
        Status = "Ready"
        Time   = $workflow.GeneratedAt
    }

    $facts += [PSCustomObject]@{
        Source = "Memory"
        Entries = $memory.Count
        Status = $memory.Status
    }

    $context.Facts = $facts
    $context.Count = $facts.Count
    $context.Status = "Ready"

    return $context
}
