Set-StrictMode -Version Latest

. "$PSScriptRoot\PlatformAdapter.ps1"

class MacOSAdapter : PlatformAdapter {

    MacOSAdapter() : base("macOS") {}

}
