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

    $state = Get-AckiWorkflowState

    $result = [WorkflowQualityGateResult]::new()

    $result.Failures = @()

    if($state.RepositoryClean){
        $result.Repository = "PASS"
    }
    else{
        $result.Repository = "FAIL"
        $result.Failures += "Repository has uncommitted changes"
    }

    if($state.Build -eq "PASS"){
        $result.Build = "PASS"
    }
    else{
        $result.Build = "FAIL"
        $result.Failures += "Build failed"
    }

    if($state.Tests -eq "PASS"){
        $result.Tests = "PASS"
    }
    else{
        $result.Tests = "FAIL"
        $result.Failures += "Tests failed"
    }

    $catalog = Test-StoryCatalog -Quiet

    if($catalog.Warnings -eq 0){
        $result.StoryCatalog = "PASS"
    }
    else{
        $result.StoryCatalog = "FAIL"
        $result.Failures += "Story Catalog contains warnings"
    }

    if(Test-Roadmap){
        $result.Roadmap = "PASS"
    }
    else{
        $result.Roadmap = "FAIL"
        $result.Failures += "Roadmap validation failed"
    }

    $result.Passed = ($result.Failures.Count -eq 0)

    return $result
}





function Update-AckiWorkflowState {

    param(
        [Parameter(Mandatory)]
        [scriptblock]$Update
    )

    $state = Get-AckiWorkflowState

    & $Update $state

    Save-WorkflowState $state

    return $state

}

