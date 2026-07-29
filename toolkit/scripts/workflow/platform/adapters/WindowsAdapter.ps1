Set-StrictMode -Version Latest

. "$PSScriptRoot\PlatformAdapter.ps1"

class WindowsAdapter : PlatformAdapter {

    WindowsAdapter() : base("Windows") {}

    [string] GetShell(){
        return "PowerShell"
    }

    [string] GetPackageManager(){
        return "winget"
    }

}
