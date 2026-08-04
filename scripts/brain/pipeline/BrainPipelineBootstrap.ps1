function Initialize-BrainPipeline
{
    $stages = @(
        "Workflow",
        "Memory",
        "Knowledge",
        "Planning",
        "Decision",
        "Execution",
        "Reflection"
    )

    foreach($name in $stages)
    {
        $stageName = $name

        Register-BrainPipelineStage `
            -Name $stageName `
            -Action ([scriptblock]::Create(
                "(Get-BrainService '$stageName').Invoke()"
            ))
    }
}

