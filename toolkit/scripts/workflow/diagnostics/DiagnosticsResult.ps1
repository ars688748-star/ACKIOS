Set-StrictMode -Version Latest

class DiagnosticsResult {
    [bool]$Healthy
    [object]$Platform
    [object]$Runtime
    [object]$Dependency
    [object]$Repository
    [datetime]$CheckedAt

    DiagnosticsResult(){
        $this.CheckedAt = Get-Date
    }
}
