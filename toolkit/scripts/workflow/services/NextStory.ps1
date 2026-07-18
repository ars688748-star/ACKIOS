function Generate-NextStory {

    $state = Get-AckiWorkflowState

    $path = Join-Path (Resolve-AckiRoot) "docs\context\NEXT_STORY.md"

@"
# Story $($state.NextStory)

## Title

TBD

## Description

Describe the work to be completed.

## Definition of Done

- Build PASS
- Tests PASS
"@ | Set-Content $path

    Write-Success "NEXT_STORY.md updated."

}
