. "$PSScriptRoot\WorkflowStatus.ps1"
. "$PSScriptRoot\StoryCatalogValidationResult.ps1"

class WorkflowHealth {

    [WorkflowStatus]$Repository

    [WorkflowStatus]$Build

    [WorkflowStatus]$Tests

    [StoryCatalogValidationResult]$StoryCatalog

    [WorkflowStatus]$Roadmap

    [WorkflowStatus]$Release

    [WorkflowStatus]$Overall

}

