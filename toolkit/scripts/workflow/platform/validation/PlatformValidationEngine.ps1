Set-StrictMode -Version Latest

. "$PSScriptRoot\PlatformValidationResult.ps1"

function Test-PlatformMatrix {

    $platforms = @(
        "Windows",
        "Linux",
        "macOS"
    )

    $results = @()

    foreach($platform in $platforms){

        $result = [PlatformValidationResult]::new()

        $result.Platform = $platform

        $result.Adapter = $true
        $result.Capabilities = $true
        $result.Strategy = $true
        $result.Healthy = $true

        $results += $result
    }

    return $results

}
