Set-StrictMode -Version Latest

class PlatformHealthResult {
    [bool]$Healthy
    [object]$Runtime
    [object]$Workflow
    [object]$QualityGate
    [datetime]$CheckedAt

    PlatformHealthResult(){
        $this.CheckedAt = Get-Date
    }
}
