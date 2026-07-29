Set-StrictMode -Version Latest


function Register-AckiosGalaxyVisualizationRuntimeEvent {

    param(

        [object]$EventBus,

        [string]$EventName,

        [scriptblock]$Handler

    )


    if(
        !($EventBus | Get-Member -Name Events)
    ){

        $EventBus |
        Add-Member `
        -MemberType NoteProperty `
        -Name Events `
        -Value @{}

    }


    $EventBus.Events[$EventName] =
        $Handler


    return $EventBus

}



function Invoke-AckiosGalaxyVisualizationRuntimeEvent {

    param(

        [object]$EventBus,

        [string]$EventName,

        [object]$Payload

    )


    if(
        $EventBus.Events.ContainsKey($EventName)
    ){

        return & $EventBus.Events[$EventName] $Payload

    }


    return $null

}



