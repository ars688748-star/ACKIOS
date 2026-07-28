$global:BrainState = [ordered]@{
    Services         = @{}
    PipelineStages   = [System.Collections.ArrayList]::new()
    WorkingMemory    = @{}
    Actions          = @{}
    ExecutionHistory = [System.Collections.ArrayList]::new()
    Runtime          = $null
}

function Get-BrainState {

    return $global:BrainState

}

