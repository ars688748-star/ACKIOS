Set-StrictMode -Version Latest

class GalaxyTimelineRecord {

    [string]$Id
    [datetime]$Timestamp
    [string]$Type
    [string]$Source
    [object]$Data


    GalaxyTimelineRecord(
        [string]$Type,
        [string]$Source,
        [object]$Data
    ){

        $this.Id = [guid]::NewGuid().ToString()
        $this.Timestamp = Get-Date
        $this.Type = $Type
        $this.Source = $Source
        $this.Data = $Data

    }

}
