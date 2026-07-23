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

