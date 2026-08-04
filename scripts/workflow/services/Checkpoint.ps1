function Update-Checkpoint {

    $state = Get-AckiWorkflowState
$git = Get-GitSummary

    $checkpointFile = Join-Path (Resolve-AckiRoot) ".work\checkpoints\LATEST_CHECKPOINT.md"

@"
# ACKIOS CHECKPOINT

Generated:
$($state.Timestamp)

Branch:
$($git.Branch)

Commit:
$($git.Commit)

Current Epic:
$($state.CurrentEpic)

Current Story:
$($state.CurrentStory)

Build:
$($state.Build)

Tests:
$($state.Tests)

Repository Clean:
$($git.Clean)

Next Story:
$($state.NextStory)

Status:
Ready for next development session.

"@ | Set-Content $checkpointFile

    Write-Success "LATEST_CHECKPOINT.md updated."

}

