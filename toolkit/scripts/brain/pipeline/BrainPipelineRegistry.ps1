(Get-BrainState).PipelineStages = [System.Collections.ArrayList]::new()

function Register-BrainPipelineStage
{
    param(
        [Parameter(Mandatory)]
        [string]$Name,

        [Parameter(Mandatory)]
        [scriptblock]$Action
    )

    if (-not ((Get-BrainState).PipelineStages | Where-Object Name -eq $Name))
    {
        [void](Get-BrainState).PipelineStages.Add(
            [PSCustomObject]@{
                Name   = $Name
                Action = $Action
            }
        )
    }
}

function Get-BrainPipelineStages
{
    return (Get-BrainState).PipelineStages
}

