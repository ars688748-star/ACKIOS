Set-StrictMode -Version Latest

class GalaxyEvent {

    [string]$Name
    [string]$Source
    [object]$Data
    [datetime]$Timestamp

    GalaxyEvent([string]$Name,[string]$Source,[object]$Data){

        $this.Name = $Name
        $this.Source = $Source
        $this.Data = $Data
        $this.Timestamp = Get-Date

    }

}
