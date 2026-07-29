Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxySnapshot.ps1"

class GalaxySnapshotStorage {

    [string]$Path

    GalaxySnapshotStorage([string]$Path){
        $this.Path = $Path

        if(-not(Test-Path $Path)){
            New-Item -ItemType Directory -Force $Path | Out-Null
        }
    }

    [string] Save([object]$Model){

        $snapshot = [GalaxySnapshot]::new($Model)

        $file = Join-Path $this.Path ("galaxy-" + $snapshot.CreatedAt.ToString("yyyyMMdd-HHmmss") + ".json")

        @{
            Id = $snapshot.Id
            CreatedAt = $snapshot.CreatedAt
            Model = $snapshot.Model
        } |
        ConvertTo-Json -Depth 20 |
        Set-Content $file -Encoding UTF8

        return $file

    }

    [object[]] GetSnapshots(){

        return Get-ChildItem $this.Path -Filter "*.json"

    }

}
