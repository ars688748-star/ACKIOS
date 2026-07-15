function Get-GitSummary {

    $status = Get-GitStatus

    $tracked =
        @(
            $status.Files |
            Where-Object {
                $_.Status -ne "??"
            }
        )

    $untracked =
        @(
            $status.Files |
            Where-Object {
                $_.Status -eq "??"
            }
        )

    [PSCustomObject]@{

        Branch = (git branch --show-current).Trim()

        Commit = (git rev-parse --short HEAD).Trim()

        TrackedChanges = $tracked.Count

        UntrackedFiles = $untracked.Count

        Clean = ($tracked.Count -eq 0)

        ReadyToRelease = (
            $tracked.Count -eq 0
        )

    }

}
