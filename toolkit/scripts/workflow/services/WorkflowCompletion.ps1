function Invoke-WorkflowCompletion {

    param(
        [Parameter(Mandatory)]
        [string]$Name
    )

    $pipeline = New-WorkflowPipeline `
        -Name $Name


    Add-WorkflowPipelineStep `
        -Pipeline $pipeline `
        -Name "Build" `
        -Action {
            Invoke-Build -ContinueOnError
        }


    Add-WorkflowPipelineStep `
        -Pipeline $pipeline `
        -Name "Tests" `
        -Action {
            Invoke-Tests
        }


    Add-WorkflowPipelineStep `
        -Pipeline $pipeline `
        -Name "Save Workflow State" `
        -Action {

            Update-AckiWorkflowState {

                param($state)

                $state.Timestamp =
                    Get-Date -Format "yyyy-MM-dd HH:mm:ss"

            } | Out-Null

            if(Test-Roadmap){

                Update-RoadmapFromWorkflowState

            }

            $true

        }


    Add-WorkflowPipelineStep `
        -Pipeline $pipeline `
        -Name "Update Chat Context" `
        -Action {
            Update-ChatContext
            $true
        }


    Add-WorkflowPipelineStep `
        -Pipeline $pipeline `
        -Name "Update Checkpoint" `
        -Action {
            Update-Checkpoint
            $true
        }


    Add-WorkflowPipelineStep `
        -Pipeline $pipeline `
        -Name "Quality Gate" `
        -Action {

            $health = New-WorkflowHealth

            if(
                $health.QualityGate.Build -ne "PASS" -or
                $health.QualityGate.Tests -ne "PASS" -or
                $health.QualityGate.StoryCatalog -ne "PASS" -or
                $health.QualityGate.Roadmap -ne "PASS"
            ){
                throw "Quality Gate failed."
            }

            $true

        }


    Add-WorkflowPipelineStep `
        -Pipeline $pipeline `
        -Name "Advance Story" `
        -Action {

            Advance-AckiStory
            $true

        }


    return Invoke-WorkflowPipeline `
        -Pipeline $pipeline

}
