Set-StrictMode -Version Latest

class RuntimeConfiguration {
    [string]$Version = "1.0"
    [bool]$EnableWorkflow = $true
    [bool]$EnableBrain = $true
    [bool]$EnableAnalytics = $true
    [bool]$EnableHistory = $true
    [bool]$EnableStorage = $true
}
