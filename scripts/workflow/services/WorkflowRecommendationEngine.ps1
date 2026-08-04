Set-StrictMode -Version Latest

function Get-WorkflowRecommendations {

    param(
        [Parameter(Mandatory)]
        $QualityGate
    )


    $recommendations = @()


    if($QualityGate.Issues.Count -gt 0){

        foreach($issue in $QualityGate.Issues){

            switch($issue.Type){

                "RoadmapMismatch" {

                    $recommendations +=
                    "Synchronize MASTER ROADMAP using Update-RoadmapFromWorkflowState."

                }


                "WorkflowStateMismatch" {

                    $recommendations +=
                    "Validate workflow state consistency."

                }


                default {

                    $recommendations +=
                    "Investigate issue: $($issue.Type)."

                }

            }

        }

    }


    if($recommendations.Count -eq 0){

        $recommendations +=
        "Workflow operating normally."

    }


    return $recommendations

}
