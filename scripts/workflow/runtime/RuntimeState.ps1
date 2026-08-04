Set-StrictMode -Version Latest

class RuntimeState {
    [string]$Status
    [datetime]$StartedAt
    [datetime]$UpdatedAt

    RuntimeState(){
        $this.Status = "CREATED"
        $this.StartedAt = Get-Date
        $this.UpdatedAt = Get-Date
    }
}
