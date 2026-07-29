Set-StrictMode -Version Latest

. "$PSScriptRoot\RuntimeBootstrap.ps1"

function Test-WorkflowRuntime {
    $Runtime = Get-WorkflowRuntimeStatus

    [pscustomobject]@{
        Healthy = ($null -ne $Runtime)
        StartedAt = $Runtime.StartedAt
        Version = $Runtime.Configuration.Version
        Workflow = $Runtime.Configuration.EnableWorkflow
        Brain = $Runtime.Configuration.EnableBrain
        Analytics = $Runtime.Configuration.EnableAnalytics
        History = $Runtime.Configuration.EnableHistory
        Storage = $Runtime.Configuration.EnableStorage
    }
}
