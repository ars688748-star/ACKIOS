Set-StrictMode -Version Latest

class GalaxySnapshot {

    [string]$Id
    [datetime]$CreatedAt
    [object]$Model

    GalaxySnapshot([object]$Model){

        $this.Id = [guid]::NewGuid().ToString()
        $this.CreatedAt = Get-Date
        $this.Model = $Model

    }

}
