function Get-ReflectionContext
{
    $context = [ReflectionContextResult]::new()

    $context.GeneratedAt = Get-Date

    $last = Get-BrainExecutionHistory

    if($null -ne $last)
    {
        $context.ExecutedAction = $last.ActionName
        $context.Success = $last.Success
        $context.Message = $last.Message

        if($last.Success)
        {
            $context.Recommendation = "Continue using this action."
            $context.Confidence = 1.0
        }
        else
        {
            $context.Recommendation = "Investigate failure before repeating."
            $context.Confidence = 0.25
        }

        $context.Status = "Ready"
    }
    else
    {
        $context.Success = $false
        $context.Message = "No execution history."
        $context.Recommendation = "Run Brain pipeline first."
        $context.Confidence = 0.0
        $context.Status = "Empty"
    }

    return $context
}
