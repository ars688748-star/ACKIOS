$script:BrainPipelineStages = [System.Collections.ArrayList]::new()

function Register-BrainPipelineStage
{
    param(
        [Parameter(Mandatory)]
        [string]$Name,

        [Parameter(Mandatory)]
        [scriptblock]$Action
    )

    if (-not ($script:BrainPipelineStages | Where-Object Name -eq $Name))
    {
        [void]$script:BrainPipelineStages.Add(
            [PSCustomObject]@{
                Name   = $Name
                Action = $Action
            }
        )
    }
}

function Get-BrainPipelineStages
{
    return $script:BrainPipelineStages
}
