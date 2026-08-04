Set-StrictMode -Version Latest

function Show-AckiosRuntimeStatus {

    $report = Get-AckiosRuntimeReport

    Write-Host ""
    Write-Host "========================================"
    Write-Host " ACKIOS RUNTIME STATUS"
    Write-Host "========================================"

    Write-Host ""
    Write-Host "Ready:" $report.Ready

    Write-Host ""
    Write-Host "Platform:"
    $report.Platform | Format-List

    Write-Host "Adapter:" $report.Adapter.Name

    Write-Host ""
    Write-Host "Capabilities:"
    $report.Capabilities | Format-List

    Write-Host "Strategy:"
    $report.Strategy | Format-List

    Write-Host "Validation:"
    $report.Validation | Format-Table

}
