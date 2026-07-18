function Advance-AckiStory {

    $state = Get-AckiWorkflowState

    $state.CurrentStory = $state.NextStory
    $state.NextStory    = Get-NextStoryId $state.CurrentStory

    Ensure-StoryExists $state.NextStory

    $state.Timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

    Save-WorkflowState -State $state

    Generate-NextStory

    return $state
}
