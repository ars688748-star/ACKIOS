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

function Test-AckiosGalaxyLoader {

    param(
        [string]$LoaderPath
    )


    $Lines =
        Get-Content $LoaderPath


    $Modules = @(
        $Lines |
        Where-Object {
            $_ -like ". (Join-Path*"
        }
    )


    $Duplicates = @(
        $Modules |
        Group-Object |
        Where-Object {
            $_.Count -gt 1
        }
    )


    $DuplicateNames = @()

    foreach($Duplicate in $Duplicates){

        $DuplicateNames += $Duplicate.Name

    }


    return [pscustomobject]@{

        ModuleCount =
            $Modules.Count

        DuplicateCount =
            $Duplicates.Count

        Duplicates =
            $DuplicateNames

        Healthy =
            ($Duplicates.Count -eq 0)

    }

}
function Repair-AckiosGalaxyLoader {

    param(
        [string]$LoaderPath
    )


    $Lines =
        Get-Content $LoaderPath


    $Seen = @{}

    $Clean =
        foreach($Line in $Lines){

            if(
                $Line.Trim().StartsWith(
                    ". (Join-Path"
                )
            ){

                if($Seen.ContainsKey($Line.Trim())){
                    continue
                }

                $Seen[$Line.Trim()] = $true

            }


            $Line

        }


    $Clean |
    Set-Content `
    $LoaderPath `
    -Encoding UTF8


    return $true

}

