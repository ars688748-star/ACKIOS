Set-StrictMode -Version Latest

$PlatformRuntimeRoot = Join-Path $PSScriptRoot "platform\runtime"

. (Join-Path $PlatformRuntimeRoot "PlatformInfo.ps1")
. (Join-Path $PlatformRuntimeRoot "PlatformDetector.ps1")
. (Join-Path $PlatformRuntimeRoot "PlatformCapabilities.ps1")
. (Join-Path $PlatformRuntimeRoot "CapabilityScanner.ps1")
