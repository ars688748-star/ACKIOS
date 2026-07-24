Set-StrictMode -Version Latest


function New-WorkflowPipeline {

    param(
        [Parameter(Mandatory)]
        [string]$Name
    )


    $pipeline = [WorkflowPipelineResult]::new()

    $pipeline.Name = $Name
    $pipeline.Steps = @()
    $pipeline.Status = "CREATED"
    $pipeline.Started = Get-Date

    return $pipeline

}



function Add-WorkflowPipelineStep {

    param(
        [Parameter(Mandatory)]
        $Pipeline,

        [Parameter(Mandatory)]
        [string]$Name,

        [Parameter(Mandatory)]
        [scriptblock]$Action
    )


    $step = [PSCustomObject]@{

        Name = $Name

        Action = $Action

    }


    $Pipeline.Steps += $step


    return $Pipeline

}



function Invoke-WorkflowPipeline {

    param(
        [Parameter(Mandatory)]
        $Pipeline
    )


    $results = @()


    foreach($step in $Pipeline.Steps){

        try {

            $results += Invoke-Step `
                -Name $step.Name `
                -Action $step.Action `
                -ContinueOnError

        }
        catch {

            $results += [PSCustomObject]@{

                Name = $step.Name

                Status = [WorkflowStatus]::FAIL

                Error = $_.Exception.Message

                Started = Get-Date

                Finished = Get-Date

                Duration = [timespan]::Zero

            }

        }

    }


    $Pipeline.Steps = $results

    $Pipeline.TotalSteps = @($results).Count

    $Pipeline.PassedSteps = @(
        $results |
        Where-Object {
            $_.Status -eq [WorkflowStatus]::PASS
        }
    ).Count

    $Pipeline.FailedSteps = @(
        $results |
        Where-Object {
            $_.Status -eq [WorkflowStatus]::FAIL
        }
    ).Count

    if($Pipeline.TotalSteps -gt 0){

        $Pipeline.SuccessRate =
            [math]::Round(
                ($Pipeline.PassedSteps / $Pipeline.TotalSteps) * 100,
                2
            )

    }


    $Pipeline.Finished = Get-Date

    $Pipeline.Duration =
        $Pipeline.Finished - $Pipeline.Started


    if(
        @(
            $results |
            Where-Object {
                $_.Status -eq [WorkflowStatus]::FAIL
            }
        ).Count -gt 0
    ){

        $Pipeline.Status = "FAILED"

    }
    else{

        $Pipeline.Status = "COMPLETED"

    }


    return $Pipeline

}


