function Invoke-GitAdd {

    param(
        [string]$Path = "."
    )

    git add $Path

    if ($LASTEXITCODE -ne 0) {
        throw "git add failed."
    }

}

function Invoke-GitCommit {

    param(
        [Parameter(Mandatory)]
        [string]$Message
    )

    $status = Get-GitStatus

    if ($status.Files.Count -eq 0) {

        Write-WarningMessage "Nothing to commit."

        return $false

    }

    git commit -m $Message

    if ($LASTEXITCODE -ne 0) {
        throw "git commit failed."
    }

    return $true

}

function Invoke-GitPush {

    git push

    if ($LASTEXITCODE -ne 0) {
        throw "git push failed."
    }

}