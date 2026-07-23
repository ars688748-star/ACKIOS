Set-StrictMode -Version Latest
. "$PSScriptRoot\WorkflowState.ps1"
. "$PSScriptRoot\StoryCatalogValidator.ps1"



function New-WorkflowHealth {

    $state = Get-AckiWorkflowState

    $story = Test-StoryCatalog -Quiet

    $health = [WorkflowHealth]::new()

    $health.Repository = if($state.RepositoryClean){ "PASS" } else { "WARN" }
    $health.Build = $state.Build
    $health.Tests = $state.Tests
    $health.StoryCatalog = $story

    return $health
}


