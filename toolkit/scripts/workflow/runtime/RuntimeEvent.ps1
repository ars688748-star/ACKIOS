Set-StrictMode -Version Latest

class RuntimeEvent {
    [string]$Name
    [datetime]$Timestamp

    RuntimeEvent([string]$Name){
        $this.Name = $Name
        $this.Timestamp = Get-Date
    }
}
