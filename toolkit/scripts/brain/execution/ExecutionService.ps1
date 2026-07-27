function Get-ExecutionContext
{
    $context = [ExecutionContextResult]::new()

    $context.GeneratedAt = Get-Date

    $decision = (Get-BrainService Decision).Invoke()

    $context.ExecutedAction = $decision.SelectedAction

    $action = Get-BrainAction $decision.SelectedAction

    if($null -ne $action)
    {
        $actionResult = & $action.Handler

        $context.Success = $actionResult.Success
        $context.Message = $actionResult.Message
$context.Result = $actionResult

Add-BrainExecutionResult $actionResult
    }
    else
    {
        $context.Success = $false
        $context.Message = "Action not found."
    }

    return $context
}



