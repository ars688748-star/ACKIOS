function Show-WorkflowSummary {

    $state = Get-AckiWorkflowState
    $git = Get-GitSummary

    Write-Host ""
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host " Workflow Summary" -ForegroundColor Cyan
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host ""

    Write-Host ("Branch            : {0}" -f $git.Branch)
    Write-Host ("Commit            : {0}" -f $git.Commit)
    Write-Host ("Tracked Changes   : {0}" -f $git.TrackedChanges)
    Write-Host ("Untracked Files   : {0}" -f $git.UntrackedFiles)
    Write-Host ("Repository Clean  : {0}" -f $git.Clean)
    Write-Host ("Ready To Release  : {0}" -f $git.ReadyToRelease)
    Write-Host ("Chat Context      : Updated")
    Write-Host ("Checkpoint        : Updated")

    Write-Host ""
    Write-Success "Workflow completed successfully."

}

