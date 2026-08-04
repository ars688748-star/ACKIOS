Set-StrictMode -Version Latest

class GalaxyNode {

    [string]$Id
    [string]$Name
    [string]$Type
    [string]$Status
    [object]$Metadata

    GalaxyNode([string]$Id,[string]$Name,[string]$Type){

        $this.Id = $Id
        $this.Name = $Name
        $this.Type = $Type
        $this.Status = "ACTIVE"
        $this.Metadata = @{}

    }

}
