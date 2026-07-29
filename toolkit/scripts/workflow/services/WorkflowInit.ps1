function Initialize-Workflow {

    Write-Header "ACKIOS Workflow"

    if (-not (Test-AckiProject)) {
        throw "ACKIOS project verification failed."
    }

    Start-WorkflowRuntime | Out-Null

    Write-Success "Workflow initialized."

}
