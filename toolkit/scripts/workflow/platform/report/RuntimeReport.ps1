Set-StrictMode -Version Latest

class RuntimeReport {

    [bool]$Ready
    [object]$Platform
    [object]$Adapter
    [object]$Capabilities
    [object]$Strategy
    [object]$Validation
    [datetime]$GeneratedAt

    RuntimeReport(){
        $this.GeneratedAt = Get-Date
    }

}
