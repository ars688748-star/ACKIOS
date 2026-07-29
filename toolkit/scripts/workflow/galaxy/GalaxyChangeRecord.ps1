Set-StrictMode -Version Latest

class GalaxyChangeRecord {

    [string]$NodeId
    [string]$EventName
    [object]$Data
    [datetime]$Timestamp

    GalaxyChangeRecord(
        [string]$NodeId,
        [string]$EventName,
        [object]$Data
    ){

        $this.NodeId = $NodeId
        $this.EventName = $EventName
        $this.Data = $Data
        $this.Timestamp = Get-Date

    }

}
