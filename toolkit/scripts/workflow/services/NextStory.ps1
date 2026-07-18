function Generate-NextStory {

    $state = Get-AckiWorkflowState

    $root = Resolve-AckiRoot

    $target = Join-Path $root "docs\context\NEXT_STORY.md"

    $story = Get-Story $state.NextStory

    if ($null -ne $story) {
        $story.Content | Set-Content $target
    }
    else {
        New-StoryTemplate $state.NextStory | Set-Content $target
    }

    Write-Success "NEXT_STORY.md updated."

}
