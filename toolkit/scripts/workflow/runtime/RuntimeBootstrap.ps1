Set-StrictMode -Version Latest

. "$PSScriptRoot\RuntimeManager.ps1"

$script:RuntimeManager = $null

function Get-WorkflowRuntimeManager {
    if($null -eq $script:RuntimeManager){
        $script:RuntimeManager = [RuntimeManager]::new()
    }

    return $script:RuntimeManager
}

function Start-WorkflowRuntime {
    return (Get-WorkflowRuntimeManager).Start()
}

function Get-WorkflowRuntimeStatus {
    return (Get-WorkflowRuntimeManager).GetStatus()
}

function Restart-WorkflowRuntime {
    return (Get-WorkflowRuntimeManager).Restart()
}
