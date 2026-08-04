function Resolve-StoryFromGitBranch {

    $git = Get-GitSummary

    if($git.Branch -match "story\/(\d+)\.(\d+)") {

        $epic = $matches[1]
        $story = "{0}.{1}" -f $matches[1],$matches[2]

        [PSCustomObject]@{

            CurrentEpic = $epic

            CurrentStory = $story

            NextStory = Get-NextStoryId $story

        }

        return

    }

    return $null

}
