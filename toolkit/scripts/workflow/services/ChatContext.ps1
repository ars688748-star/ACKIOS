function Update-ChatContext {

    $state = Get-AckiWorkflowState

    $contextFile = Join-Path (Resolve-AckiRoot) ".work\context\CHAT_CONTEXT.md"

@"
# ACKIOS CHAT CONTEXT

Generated:
$($state.Timestamp)

Project:
ACKIOS

Branch:
$($state.Branch)

Commit:
$($state.Commit)

Current Epic:
$($state.CurrentEpic)

Current Story:
$($state.CurrentStory)

Build:
$($state.Build)

Tests:
$($state.Tests)

Next Story:
$($state.NextStory)

Repository Clean:
$($state.RepositoryClean)

Status:
Development in progress.

"@ | Set-Content $contextFile

    Write-Success "CHAT_CONTEXT.md updated."

}
