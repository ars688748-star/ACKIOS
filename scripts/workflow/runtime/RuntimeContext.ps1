Set-StrictMode -Version Latest

. "$PSScriptRoot\RuntimeConfiguration.ps1"

class RuntimeContext {
    [RuntimeConfiguration]$Configuration
    [datetime]$StartedAt

    RuntimeContext(){
        $this.Configuration = [RuntimeConfiguration]::new()
        $this.StartedAt = Get-Date
    }
}
