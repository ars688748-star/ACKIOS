Set-StrictMode -Version Latest


function New-AckiosGalaxyVisualizationActionRegistry {

    return [pscustomobject]@{

        Actions =
            @{}

        State =
            "READY"

        UpdatedAt =
            Get-Date

    }

}



function Register-AckiosGalaxyVisualizationAction {

    param(

        [object]$Registry,

        [string]$ActionName,

        [scriptblock]$Handler

    )


    $Registry.Actions[$ActionName] =
        $Handler


    $Registry.UpdatedAt =
        Get-Date


    return $Registry

}



function Invoke-AckiosGalaxyVisualizationAction {

    param(

        [object]$Registry,

        [string]$ActionName,

        [object]$Payload

    )


    if(
        !$Registry.Actions.ContainsKey($ActionName)
    ){

        return $null

    }


    return & $Registry.Actions[$ActionName] $Payload

}

