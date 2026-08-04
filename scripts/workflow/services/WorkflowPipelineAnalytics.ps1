Set-StrictMode -Version Latest


function Get-LastWorkflowPipeline {

    $history = @(Get-WorkflowPipelineHistory)

    if($history.Count -eq 0){

        return $null

    }


    return $history[-1]

}
