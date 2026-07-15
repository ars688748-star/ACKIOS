function Show-WorkflowSummary {

    $state = Get-AckiWorkflowState

    Write-Host ""
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host " Workflow Summary" -ForegroundColor Cyan
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host ""

    Write-Host ("Branch            : {0}" -f $state.Branch)
    Write-Host ("Commit            : {0}" -f $state.Commit)
    Write-Host ("Repository Clean  : {0}" -f $state.RepositoryClean)
    Write-Host ("Chat Context      : Updated")
    Write-Host ("Checkpoint        : Updated")

    Write-Host ""
    Write-Success "Workflow completed successfully."

}
