function Advance-AckiStory {

    $state = Get-AckiWorkflowState

    Set-StoryStatus `
        -StoryId $state.CurrentStory `
        -Status "Completed"

    $state = Update-AckiWorkflowState {

        param($state)

        $state.CurrentStory = $state.NextStory
        $state.NextStory    = Get-NextStoryId $state.CurrentStory
        $state.Timestamp    = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    }

    Ensure-StoryExists $state.NextStory

    Generate-NextStory

    return $state
}

