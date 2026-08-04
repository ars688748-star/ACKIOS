Set-StrictMode -Version Latest

. "$PSScriptRoot\PlatformInfo.ps1"

function Get-PlatformInfo {

    $info = [PlatformInfo]::new()

    $info.OS = [System.Runtime.InteropServices.RuntimeInformation]::OSDescription

    $info.Architecture = [System.Runtime.InteropServices.RuntimeInformation]::OSArchitecture.ToString()

    $info.PowerShellVersion = $PSVersionTable.PSVersion.ToString()

    try {
        $info.NodeVersion = (node --version)
    }
    catch {
        $info.NodeVersion = "Unavailable"
    }

    $info.MachineName = $env:COMPUTERNAME

    return $info

}
