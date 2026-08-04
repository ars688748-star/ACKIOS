Set-StrictMode -Version Latest

. "$PSScriptRoot\PlatformAdapter.ps1"
. "$PSScriptRoot\WindowsAdapter.ps1"
. "$PSScriptRoot\LinuxAdapter.ps1"
. "$PSScriptRoot\MacOSAdapter.ps1"

function Get-PlatformAdapter {

    $info = Get-PlatformInfo

    if($info.OS -match "Windows"){
        return [WindowsAdapter]::new()
    }

    if($info.OS -match "Linux"){
        return [LinuxAdapter]::new()
    }

    if($info.OS -match "Darwin|macOS"){
        return [MacOSAdapter]::new()
    }

    throw "Unsupported platform: $($info.OS)"

}
