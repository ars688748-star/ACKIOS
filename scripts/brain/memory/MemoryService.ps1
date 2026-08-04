function Get-MemoryContext
{
    $context = [MemoryContextResult]::new()

    $context.GeneratedAt = Get-Date
    $context.Entries = @()
    $context.Count = 0
    $context.Status = "Ready"

    return $context
}
