. "$PSScriptRoot\WorkflowStatus.ps1"
. "$PSScriptRoot\StoryCatalogValidationResult.ps1"
. "$PSScriptRoot\WorkflowQualityGateResult.ps1"

class WorkflowHealth {

    [WorkflowStatus]$Repository

    [WorkflowStatus]$Build

    [WorkflowStatus]$Tests

    [StoryCatalogValidationResult]$StoryCatalog

    [WorkflowStatus]$Roadmap

    [WorkflowStatus]$Release

    [WorkflowQualityGateResult]$QualityGate

    [WorkflowStatus]$Overall

}


