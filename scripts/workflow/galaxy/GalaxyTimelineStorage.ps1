Set-StrictMode -Version Latest


class GalaxyTimelineStorage {


    [string]$Path


    GalaxyTimelineStorage(
        [string]$Path
    ){

        $this.Path = $Path

    }


    [void] Save(
        [object]$Timeline
    ){

        $directory = Split-Path $this.Path


        if(-not(Test-Path $directory)){

            New-Item `
            -ItemType Directory `
            -Path $directory |
            Out-Null

        }


        $Timeline.GetRecords() |
        ConvertTo-Json `
        -Depth 10 |
        Set-Content `
        $this.Path `
        -Encoding UTF8

    }


    [object[]] Load(){

        if(-not(Test-Path $this.Path)){

            return @()

        }


        return Get-Content `
        $this.Path |
        ConvertFrom-Json

    }


}
