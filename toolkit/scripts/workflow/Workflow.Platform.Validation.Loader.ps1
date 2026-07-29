Set-StrictMode -Version Latest

$ValidationRoot = Join-Path $PSScriptRoot "platform\validation"

. (Join-Path $ValidationRoot "PlatformValidationResult.ps1")
. (Join-Path $ValidationRoot "PlatformValidationEngine.ps1")
