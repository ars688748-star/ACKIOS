function Initialize-Workflow {

    Write-Header "ACKIOS Workflow"

    if (-not (Test-AckiProject)) {
        throw "ACKIOS project verification failed."
    }

    Write-Success "Workflow initialized."

}


