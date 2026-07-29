Set-StrictMode -Version Latest

. "$PSScriptRoot\RuntimeReport.ps1"

function Get-AckiosRuntimeReport {

    $report = [RuntimeReport]::new()

    $health = Get-PlatformHealth

    $report.Platform = Get-PlatformInfo
    $report.Adapter = Get-PlatformAdapter
    $report.Capabilities = Get-PlatformCapabilities
    $report.Strategy = Get-RuntimeStrategy
    $report.Validation = Test-PlatformMatrix

    $failed = @(
        $report.Validation |
        Where-Object {$_.Healthy -eq $false}
    )

    $report.Ready = 
        $health.Healthy -and 
        ($failed.Count -eq 0)

    return $report

}
