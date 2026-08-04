Set-StrictMode -Version Latest

$PlatformRoot = Join-Path $PSScriptRoot "platform"

. (Join-Path $PlatformRoot "PlatformHealthResult.ps1")
. (Join-Path $PlatformRoot "PlatformHealth.ps1")
