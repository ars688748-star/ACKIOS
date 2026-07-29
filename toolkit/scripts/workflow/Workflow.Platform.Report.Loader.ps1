Set-StrictMode -Version Latest

$ReportRoot = Join-Path $PSScriptRoot "platform\report"

. (Join-Path $ReportRoot "RuntimeReport.ps1")
. (Join-Path $ReportRoot "RuntimeReportEngine.ps1")
. (Join-Path $ReportRoot "RuntimeStatusRenderer.ps1")
