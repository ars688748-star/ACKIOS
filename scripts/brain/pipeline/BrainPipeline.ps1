function Invoke-BrainPipeline
{
    $result = [BrainPipelineResult]::new()

    $result.StartedAt = Get-Date

    $runtime = [BrainRuntimeContextResult]::new()

    foreach($stage in Get-BrainPipelineStages)
    {
        $value = Invoke-BrainStage `
    -Name $stage.Name `
    -Action $stage.Action

        switch($stage.Name)
        {
            "Workflow"   { $runtime.Workflow   = $value }
            "Memory"     { $runtime.Memory     = $value }
            "Knowledge"  { $runtime.Knowledge  = $value }
            "Planning"   { $runtime.Planning   = $value }
            "Decision"   { $runtime.Decision   = $value }
            "Execution"  { $runtime.Execution  = $value }
            "Reflection" { $runtime.Reflection = $value }
        }

        [void]$result.ExecutedStages.Add($stage.Name)
    }

    $runtime.GeneratedAt = Get-Date

    Set-BrainRuntimeContext $runtime

    $result.Context = $runtime

    $result.FinishedAt = Get-Date

    return $result
}


