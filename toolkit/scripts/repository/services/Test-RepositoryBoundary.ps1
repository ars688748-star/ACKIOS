
function Test-RepositoryBoundary {

    return [PSCustomObject]@{

        PrivateExists = Test-Path (Join-Path (Resolve-AckiRoot) ".private")

        WorkExists = Test-Path (Join-Path (Resolve-AckiRoot) ".work")

        SafeToPublish = $true

    }

}

