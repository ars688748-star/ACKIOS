Set-StrictMode -Version Latest

$DiagnosticsRoot = Join-Path $PSScriptRoot "diagnostics"

. (Join-Path $DiagnosticsRoot "DiagnosticsResult.ps1")
. (Join-Path $DiagnosticsRoot "DiagnosticsEngine.ps1")
