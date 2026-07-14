function New-RepositoryBoundaryResult {

    return [PSCustomObject]@{

        Passed = $true

        Errors = @()

        Warnings = @()

        PrivateAreaDetected = $false

        WorkAreaDetected = $false

        GitIndexClean = $true

        ForbiddenFiles = @()

        CheckedAt = Get-Date

        CheckedBy = "RepositoryBoundaryChecker"

    }

}
