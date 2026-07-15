Set-StrictMode -Version Latest

$ErrorActionPreference = "Stop"

. "$PSScriptRoot\Workflow.Core.ps1"

Initialize-Workflow

$sourceBranch = (Get-GitSummary).Branch

Invoke-Step "Repository Boundary" {

    $boundary = Test-RepositoryBoundary

    if (-not $boundary.SafeToPublish) {
        throw "Repository Boundary validation failed."
    }

}

Invoke-Step "Build" {

    Invoke-Build

}

Invoke-Step "Tests" {

    Invoke-Tests

}

Invoke-Step "Verify Repository Clean" {

    $git = Get-GitSummary

    if (-not $git.Clean) {
        throw "Repository is not clean. Release aborted."
    }

}

Invoke-Step "Checkout main" {

    git checkout main

    if ($LASTEXITCODE -ne 0) {
        throw "git checkout main failed."
    }

}

Invoke-Step "Merge current branch" {

    git merge --ff-only $sourceBranch

    if ($LASTEXITCODE -ne 0) {
        throw "Fast-forward merge failed."
    }

}

Invoke-Step "Push main" {

    git push origin main

    if ($LASTEXITCODE -ne 0) {
        throw "git push origin main failed."
    }

}

Invoke-Step "Return to source branch" {

    git checkout $sourceBranch

    if ($LASTEXITCODE -ne 0) {
        throw "git checkout source branch failed."
    }

}

Show-WorkflowSummary

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host " ACKIOS RELEASE COMPLETED" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""





