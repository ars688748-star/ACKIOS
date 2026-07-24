Set-StrictMode -Version Latest

. "$PSScriptRoot\WorkflowState.ps1"
. "$PSScriptRoot\StoryCatalogValidator.ps1"

function New-WorkflowHealth {

    $state = Get-AckiWorkflowState

    $story = Test-StoryCatalog -Quiet

    $health = [WorkflowHealth]::new()

    $health.Repository =
        if($state.RepositoryClean){
            [WorkflowStatus]::Pass
        }
        else{
            [WorkflowStatus]::Warn
        }

    $health.Build = $state.Build
    $health.Tests = $state.Tests
    $health.StoryCatalog = $story
    $health.QualityGate = Invoke-QualityGate

    $health.Roadmap = [WorkflowStatus]::Pass
    $health.Release = [WorkflowStatus]::Pass

    if(
        $health.Repository -eq [WorkflowStatus]::Pass -and
        $health.Build -eq [WorkflowStatus]::Pass -and
        $health.Tests -eq [WorkflowStatus]::Pass -and
        $health.Roadmap -eq [WorkflowStatus]::Pass -and
        $health.Release -eq [WorkflowStatus]::Pass
    ){
        $health.Overall = [WorkflowStatus]::Pass
    }
    else{
        $health.Overall = [WorkflowStatus]::Warn
    }

    return $health

}

