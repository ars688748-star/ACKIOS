Set-StrictMode -Version Latest

$RuntimeRoot = Join-Path $PSScriptRoot "runtime"

. (Join-Path $RuntimeRoot "RuntimeConfiguration.ps1")
. (Join-Path $RuntimeRoot "RuntimeContext.ps1")
. (Join-Path $RuntimeRoot "RuntimeManager.ps1")
. (Join-Path $RuntimeRoot "RuntimeBootstrap.ps1")
. (Join-Path $RuntimeRoot "RuntimeHealth.ps1")
