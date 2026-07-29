Set-StrictMode -Version Latest


function Add-AckiosGalaxyModule {

    param(
        [string]$LoaderPath,
        [string]$ModulePath
    )


    $Line =
        ". (Join-Path `$GalaxyRoot `"$ModulePath`")"


    $Content =
        Get-Content $LoaderPath


    if(
        $Content -contains $Line
    ){

        return $false

    }


    Add-Content `
        $LoaderPath `
        $Line


    return $true

}
