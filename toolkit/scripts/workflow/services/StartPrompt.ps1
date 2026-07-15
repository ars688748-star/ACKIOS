function Generate-StartChatPrompt {

    $state = Get-AckiWorkflowState
$git = Get-GitSummary

    $promptFile = Join-Path (Resolve-AckiRoot) ".work\context\START_CHAT_PROMPT.md"

    $nextStoryFile = Join-Path (Resolve-AckiRoot) ".work\context\NEXT_STORY.md"

    $nextStory = ""

    if (Test-Path $nextStoryFile) {
        $nextStory = Get-Content $nextStoryFile -Raw
    }

@"
# ACKIOS DEVELOPMENT SESSION

Project:
ACKIOS

Branch:
$($git.Branch)

Commit:
$($git.Commit)

Current Epic:
$($state.CurrentEpic)

Current Story:
$($state.CurrentStory)

Next Story:
$($state.NextStory)

Build:
$($state.Build)

Tests:
$($state.Tests)

Repository Clean:
$($git.Clean)

==================================================

NEXT STORY

$nextStory

==================================================

Continue development from Current Story.

Rules:

- Use PowerShell commands only.
- Follow ACKIOS workflow.
- Update workflow state after completed work.
- Finish the session with:

.\scripts\workflow\END_CHAT.ps1

"@ | Set-Content $promptFile

    Write-Success "START_CHAT_PROMPT.md updated."

}


