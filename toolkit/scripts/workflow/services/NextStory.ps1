function Generate-NextStory {

    $state = Get-AckiWorkflowState

    $root = Resolve-AckiRoot

    $target = Join-Path $root "docs\context\NEXT_STORY.md"
    $source = Join-Path $root "docs\stories\$($state.NextStory).md"

    if (Test-Path $source) {
        Copy-Item $source $target -Force
    }
    else {
        New-StoryTemplate $state.NextStory | Set-Content $target
    }

    Write-Success "NEXT_STORY.md updated."

}
