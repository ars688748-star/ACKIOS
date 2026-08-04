Set-StrictMode -Version Latest

class DiagnosticsResult {
    [bool]$Healthy
    [object]$Platform
    [object]$Runtime
    [object]$Dependency
    [object]$Repository
    [object]$CrossPlatform
    [datetime]$CheckedAt

    DiagnosticsResult(){
        $this.CheckedAt = Get-Date
    }
}
