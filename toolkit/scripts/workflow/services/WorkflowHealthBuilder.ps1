Set-StrictMode -Version Latest

function New-WorkflowHealth {

    param(

        [WorkflowStatus]$Repository = [WorkflowStatus]::Pass,

        [WorkflowStatus]$Build = [WorkflowStatus]::Pass,

        [WorkflowStatus]$Tests = [WorkflowStatus]::Pass,

        [StoryCatalogValidationResult]$StoryCatalog,

        [WorkflowStatus]$Roadmap = [WorkflowStatus]::Pass,

        [WorkflowStatus]$Release = [WorkflowStatus]::Pass

    )

    $health = [WorkflowHealth]::new()

    $health.Repository = $Repository
    $health.Build = $Build
    $health.Tests = $Tests
    $health.StoryCatalog = $StoryCatalog
    $health.Roadmap = $Roadmap
    $health.Release = $Release

    if(
        $Repository -eq [WorkflowStatus]::Pass -and
        $Build -eq [WorkflowStatus]::Pass -and
        $Tests -eq [WorkflowStatus]::Pass -and
        $Roadmap -eq [WorkflowStatus]::Pass -and
        $Release -eq [WorkflowStatus]::Pass
    ){
        $health.Overall = [WorkflowStatus]::Pass
    }
    else{
        $health.Overall = [WorkflowStatus]::Fail
    }

    return $health

}
