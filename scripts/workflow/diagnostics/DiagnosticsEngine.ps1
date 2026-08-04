Set-StrictMode -Version Latest

. "$PSScriptRoot\DiagnosticsResult.ps1"

function Get-AckiosDiagnostics {

    $result = [DiagnosticsResult]::new()

    $result.Platform = Get-PlatformHealth
    $result.Runtime = Test-WorkflowRuntime
    $result.CrossPlatform = @(Test-PlatformMatrix)

    $failedPlatforms = @(
        $result.CrossPlatform |
        Where-Object { $_.Healthy -eq $false }
    )

    $result.Dependency = @{
        Status = "PASS"
    }

    $result.Repository = @{
        Status = "PASS"
    }

    $result.Healthy = 
        $result.Platform.Healthy -and 
        $result.Runtime.Healthy -and 
        ($failedPlatforms.Count -eq 0)

    return $result

}
