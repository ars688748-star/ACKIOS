Set-StrictMode -Version Latest

. "$PSScriptRoot\RuntimeStrategy.ps1"

function Get-RuntimeStrategy {

    $cap = Get-PlatformCapabilities

    $strategy = [RuntimeStrategy]::new()

    switch($cap.PowerMode){

        "HIGH" {
            $strategy.Mode = "HIGH"
            $strategy.Workers = 8
            $strategy.ExtendedCache = $true
            $strategy.ParallelExecution = $true
        }

        "NORMAL" {
            $strategy.Mode = "NORMAL"
            $strategy.Workers = 4
            $strategy.ExtendedCache = $true
            $strategy.ParallelExecution = $true
        }

        default {
            $strategy.Mode = "LOW"
            $strategy.Workers = 1
            $strategy.ExtendedCache = $false
            $strategy.ParallelExecution = $false
        }
    }

    return $strategy

}
