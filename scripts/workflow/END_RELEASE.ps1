Set-StrictMode -Version Latest

$ErrorActionPreference = "Stop"

. "$PSScriptRoot\Workflow.Core.ps1"

Initialize-Workflow

$steps = @()


$sourceBranch = (Get-GitSummary).Branch

$steps += Invoke-Step "Repository Boundary" {

    $boundary = Test-RepositoryBoundary

    if (-not $boundary.SafeToPublish) {
        throw "Repository Boundary validation failed."
    }

}

$steps += Invoke-Step "Build" {

    Invoke-Build

}

$steps += Invoke-Step "Tests" {

    Invoke-Tests

}

$steps += Invoke-Step "Verify Repository Clean" {

    $git = Get-GitSummary

    if (-not $git.Clean) {
        throw "Repository is not clean. Release aborted."
    }

}

$steps += Invoke-Step "Checkout main" {

    git checkout main

    if ($LASTEXITCODE -ne 0) {
        throw "git checkout main failed."
    }

}

$steps += Invoke-Step "Merge current branch" {

    git merge --ff-only $sourceBranch

    if ($LASTEXITCODE -ne 0) {
        throw "Fast-forward merge failed."
    }

}

$steps += Invoke-Step "Push main" {

    git push origin main

    if ($LASTEXITCODE -ne 0) {
        throw "git push origin main failed."
    }

}

$steps += Invoke-Step "Return to source branch" {

    git checkout $sourceBranch

    if ($LASTEXITCODE -ne 0) {
        throw "git checkout source branch failed."
    }

}

$report = New-WorkflowExecutionReport -Steps $steps

$health = New-WorkflowHealth

Show-WorkflowSummary `
    -ExecutionReport $report `
    -Health $health

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host " ACKIOS RELEASE COMPLETED" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""







