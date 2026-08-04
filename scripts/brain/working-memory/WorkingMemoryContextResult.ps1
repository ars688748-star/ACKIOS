class WorkingMemoryContextResult
{
    [datetime]$GeneratedAt

    [hashtable]$State

    [string]$Status

    WorkingMemoryContextResult()
    {
        $this.GeneratedAt = Get-Date
        $this.State = @{}
        $this.Status = "Ready"
    }
}
