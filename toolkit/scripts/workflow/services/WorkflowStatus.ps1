function Get-GitSummary {

    $branch = (git branch --show-current).Trim()
    $commit = (git rev-parse --short HEAD).Trim()
    $status = git status --short

    [PSCustomObject]@{
        Branch = $branch
        Commit = $commit
        Clean  = [string]::IsNullOrWhiteSpace($status)
    }

}
