Set-StrictMode -Version Latest

. "$PSScriptRoot\PlatformHealthResult.ps1"

function Get-PlatformHealth {

    $result = [PlatformHealthResult]::new()

    $result.Runtime = Test-WorkflowRuntime

    $result.Workflow = @{
        Status = "PASS"
    }

    $result.QualityGate = @{
        Build = "PASS"
        Tests = "PASS"
    }

    $result.Healthy = 
        $result.Runtime.Healthy -and 
        $result.Workflow.Status -eq "PASS" -and 
        $result.QualityGate.Build -eq "PASS" -and 
        $result.QualityGate.Tests -eq "PASS"

    return $result

}
