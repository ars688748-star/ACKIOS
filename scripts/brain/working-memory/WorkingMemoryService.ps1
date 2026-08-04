function Get-WorkingMemoryContext
{
    $context = [WorkingMemoryContextResult]::new()

    $context.State = Get-BrainWorkingMemory

    return $context
}
