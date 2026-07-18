function Get-AckiWorkflowState {

    return Load-WorkflowState

}

function Save-WorkflowState {

    param(
        [Parameter(Mandatory)]
        $State
    )

    $git = Get-GitSummary

        $workflowStateFile = Join-Path (Resolve-AckiRoot) ".work\state\WORKFLOW_STATE.json"

    $workflow = [PSCustomObject]@{

        Timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

        Branch = $git.Branch

        Commit = $git.Commit

        RepositoryClean = $git.Clean

        CurrentEpic = $state.CurrentEpic

        CurrentStory = $state.CurrentStory

        NextStory = $state.NextStory

        Build = $state.Build

        Tests = $state.Tests

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




