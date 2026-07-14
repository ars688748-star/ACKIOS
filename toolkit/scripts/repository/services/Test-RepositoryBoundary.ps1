function Test-RepositoryBoundary {

    $rules = Get-BoundaryRules

    $gitStatus = Get-GitStatus

    $violations = @(Check-ForbiddenPaths `
        -GitStatus $gitStatus `
        -Rules $rules)

    [PSCustomObject]@{

        PrivateExists = Test-Path (Join-Path (Resolve-AckiRoot) ".private")

        WorkExists = Test-Path (Join-Path (Resolve-AckiRoot) ".work")

        Violations = $violations

        SafeToPublish = ($violations.Count -eq 0)

    }

}
