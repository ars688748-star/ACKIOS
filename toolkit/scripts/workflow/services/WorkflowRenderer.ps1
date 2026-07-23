Set-StrictMode -Version Latest

function Show-WorkflowHealth {

    param(
        $Health
    )

    Write-Host ""
    Write-Host "Workflow Health"
    Write-Host "---------------"

    Write-Host ("Repository   : {0}" -f $Health.Repository)
    Write-Host ("Build        : {0}" -f $Health.Build)
    Write-Host ("Tests        : {0}" -f $Health.Tests)

    if($Health.StoryCatalog){

        Write-Host ""
        Write-Host "Story Catalog"

        Write-Host ("  Total      : {0}" -f $Health.StoryCatalog.Total)
        Write-Host ("  Valid      : {0}" -f $Health.StoryCatalog.Valid)
        Write-Host ("  Warnings   : {0}" -f $Health.StoryCatalog.Warnings)
    }

    Write-Host ""
}


function Show-WorkflowExecutionReport {

    param(

        [Parameter(Mandatory)]
        [WorkflowExecutionReport]$Report

    )

    Write-Host ""
    Write-Host "Workflow Execution"
    Write-Host "------------------"

    foreach($step in $Report.Steps){

        Write-Host (
            "{0,-6} {1,-24} {2}" -f `
            $step.Status,
            $step.Name,
            $step.Duration
        )

    }

    Write-Host ""
    Write-Host "Summary"
    Write-Host "-------"

    Write-Host ("Succeeded : {0}" -f $Report.Succeeded)
    Write-Host ("Failed    : {0}" -f $Report.Failed)
    Write-Host ("Duration  : {0}" -f $Report.Duration)
    Write-Host ("Status    : {0}" -f $Report.Status)

    Write-Host ""

}
