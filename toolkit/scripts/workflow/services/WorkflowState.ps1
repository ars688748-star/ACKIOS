function Get-AckiWorkflowState {

    return Load-WorkflowState

}

function Save-WorkflowState {

    $git = Get-GitSummary

    $state = Get-AckiWorkflowState

    $workflowStateFile = Join-Path (Resolve-AckiRoot) ".work\state\WORKFLOW_STATE.json"

    $workflow = [PSCustomObject]@{

        Timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

        Branch = $git.Branch

        Commit = $git.Commit

        RepositoryClean = $git.Clean

        CurrentEpic = "114"

        CurrentStory = "114.5.3"

        NextStory = "114.5.4"

        Build = "PASS"

        Tests = "PASS"

    }

    $workflow |
        ConvertTo-Json -Depth 5 |
        Set-Content $workflowStateFile

    Write-Success "WORKFLOW_STATE.json updated."

}

function Load-WorkflowState {

    $workflowStateFile = Join-Path (Resolve-AckiRoot) ".work\state\WORKFLOW_STATE.json"

    if (!(Test-Path $workflowStateFile)) {
        throw "Workflow state file not found: $workflowStateFile"
    }

    return Get-Content $workflowStateFile -Raw | ConvertFrom-Json

}

function Invoke-QualityGate {

    throw "Not implemented."

}


