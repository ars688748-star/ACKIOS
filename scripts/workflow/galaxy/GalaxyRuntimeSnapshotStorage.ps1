Set-StrictMode -Version Latest


function Save-AckiosGalaxyRuntimeSnapshot {

    param(
        [object]$Snapshot,
        [string]$Path
    )


    $Directory =
        Split-Path $Path


    if(
        !(Test-Path $Directory)
    ){

        New-Item `
        -ItemType Directory `
        -Path $Directory |
        Out-Null

    }


    $Snapshot |
    ConvertTo-Json `
    -Depth 20 |
    Set-Content `
    $Path `
    -Encoding UTF8


    return $true

}



function Load-AckiosGalaxyRuntimeSnapshot {

    param(
        [string]$Path
    )


    if(
        !(Test-Path $Path)
    ){

        return $null

    }


    return Get-Content `
    $Path `
    -Raw |
    ConvertFrom-Json

}
