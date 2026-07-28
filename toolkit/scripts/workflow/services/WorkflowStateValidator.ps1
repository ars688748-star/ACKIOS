Set-StrictMode -Version Latest

function Test-WorkflowStateConsistency {

    $result = [WorkflowStateValidationResult]::new()

    $result.Failures = @()
$result.Issues = @()

    $root = Resolve-AckiRoot


    #
    # Check workflow state file
    #

    $statePath = Join-Path $root ".work\state\WORKFLOW_STATE.json"

    if(Test-Path $statePath){

        $result.StateFile = "PASS"

    }
    else{

        $result.StateFile = "FAIL"
        $result.Failures += "Workflow state file missing"

    }


    #
    # Check roadmap synchronization
    #

    $state = Get-AckiWorkflowState

    $roadmapPath = Join-Path $root ".private\strategy\ACKIOS_MASTER_ROADMAP.md"


    if(Test-Path $roadmapPath){

        $roadmap = Get-Content $roadmapPath -Raw


        if(
            $roadmap -match "Current Story:\s*$($state.CurrentStory)" -and
            $roadmap -match "Next Story:\s*$($state.NextStory)"
        ){

            $result.RoadmapSync = "PASS"

        }
        else{

            $result.RoadmapSync = "FAIL"
            $result.Failures += "Roadmap state mismatch"

$result.Issues += [WorkflowStateIssue]@{
    Type = "RoadmapMismatch"
    Component = "ACKIOS_MASTER_ROADMAP"
    Expected = "CurrentStory: $($state.CurrentStory), NextStory: $($state.NextStory)"
    Actual = "Roadmap state mismatch"
    File = ".private\strategy\ACKIOS_MASTER_ROADMAP.md"
    Message = "MASTER ROADMAP is not synchronized with workflow state."
}

        }

    }
    else{

        $result.RoadmapSync = "FAIL"
        $result.Failures += "Roadmap file missing"

    }


    #
    # Check next story synchronization
    #

    $nextStoryPath = Join-Path $root "docs\context\NEXT_STORY.md"


    if(Test-Path $nextStoryPath){

        $nextStory = Get-Content $nextStoryPath -Raw


        if($nextStory -match $state.NextStory){

            $result.NextStorySync = "PASS"

        }
        else{

            $result.NextStorySync = "FAIL"
            $result.Failures += "NEXT_STORY mismatch"

$result.Issues += [WorkflowStateIssue]@{
    Type = "NextStoryMismatch"
    Component = "NEXT_STORY"
    Expected = $state.NextStory
    Actual = "Mismatch"
    File = "docs\context\NEXT_STORY.md"
    Message = "NEXT_STORY.md is not synchronized with workflow state."
}

        }

    }
    else{

        $result.NextStorySync = "FAIL"
        $result.Failures += "NEXT_STORY file missing"

    }


    $result.Passed = ($result.Failures.Count -eq 0)


    return $result

}



