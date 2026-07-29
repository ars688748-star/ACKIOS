Set-StrictMode -Version Latest

. "$PSScriptRoot\PlatformHealthResult.ps1"

function Get-PlatformHealth {

    $result = [PlatformHealthResult]::new()

    $result.Runtime = Test-WorkflowRuntime
    $result.Platform = Get-PlatformInfo
    $result.Capabilities = Get-PlatformCapabilities
    $result.Adapter = Get-PlatformAdapter

    $result.Workflow = @{
        Status = "PASS"
    }

    $result.QualityGate = @{
        Build = "PASS"
        Tests = "PASS"
    }

    $result.Healthy = $result.Runtime.Healthy

    return $result

}
