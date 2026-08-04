class BrainPipelineResult
{
    [datetime]$StartedAt
    [datetime]$FinishedAt

    [System.Collections.ArrayList]$ExecutedStages

    [BrainRuntimeContextResult]$Context

    BrainPipelineResult()
    {
        $this.ExecutedStages = [System.Collections.ArrayList]::new()
    }
}
