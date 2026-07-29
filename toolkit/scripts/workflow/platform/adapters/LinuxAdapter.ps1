Set-StrictMode -Version Latest

. "$PSScriptRoot\PlatformAdapter.ps1"

class LinuxAdapter : PlatformAdapter {

    LinuxAdapter() : base("Linux") {}

}
