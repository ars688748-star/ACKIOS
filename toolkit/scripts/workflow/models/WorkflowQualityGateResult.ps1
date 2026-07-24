class WorkflowQualityGateResult {

    [bool]$Passed

    [string]$Repository

    [string]$Build

    [string]$Tests

    [string]$StoryCatalog

    [string]$Roadmap

    [string]$BackupFiles

    [string]$Diagnostics

    [string]$StateConsistency

    [string[]]$Failures

}
