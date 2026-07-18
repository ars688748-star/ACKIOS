function Test-Story {

    param(
        [Parameter(Mandatory)]
        [string]$StoryId
    )

    $story = Get-Story $StoryId

    if ($null -eq $story) {
        throw "Story '$StoryId' not found."
    }

    if ([string]::IsNullOrWhiteSpace($story.Title)) {
        throw "Story '$StoryId' has no Title."
    }

    if ([string]::IsNullOrWhiteSpace($story.Description)) {
        throw "Story '$StoryId' has no Description."
    }

    if ([string]::IsNullOrWhiteSpace($story.Status)) {
        throw "Story '$StoryId' has no Status."
    }

    $story
}
