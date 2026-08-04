Set-StrictMode -Version Latest

function Invoke-WorkflowDiagnostics {

    $result = [WorkflowDiagnosticsResult]::new()

    $result.Failures = @()


    $root = Resolve-AckiRoot


    #
    # Services
    #

    $services = @(
        "WorkflowState.ps1",
        "WorkflowEngine.ps1",
        "WorkflowQuality.ps1"
    )

    $missingServices = @()

    foreach($service in $services){

        if(!(Test-Path (Join-Path $root "scripts\workflow\services\$service"))){

            $missingServices += $service

        }

    }

    if($missingServices.Count -eq 0){

        $result.Services = "PASS"

    }
    else {

        $result.Services = "FAIL"
        $result.Failures += "Missing services: $($missingServices -join ', ')"

    }


    #
    # Models
    #

    $models = @(
        "WorkflowQualityGateResult.ps1",
        "WorkflowHealth.ps1",
        "WorkflowDiagnosticsResult.ps1"
    )

    $missingModels = @()

    foreach($model in $models){

        if(!(Test-Path (Join-Path $root "scripts\workflow\models\$model"))){

            $missingModels += $model

        }

    }

    if($missingModels.Count -eq 0){

        $result.Models = "PASS"

    }
    else {

        $result.Models = "FAIL"
        $result.Failures += "Missing models: $($missingModels -join ', ')"

    }


    #
    # State
    #

    if(Test-Path (Join-Path $root ".work\state\WORKFLOW_STATE.json")){

        $result.State = "PASS"

    }
    else {

        $result.State = "FAIL"
        $result.Failures += "Workflow state missing"

    }


    #
    # Roadmap
    #

    if(Test-Roadmap){

        $result.Roadmap = "PASS"

    }
    else {

        $result.Roadmap = "FAIL"
        $result.Failures += "Roadmap validation failed"

    }


    #
    # History
    #

    if(Test-Path (Join-Path $root "scripts\workflow\storage\executions\HISTORY.json")){

        $result.History = "PASS"

    }
    else {

        $result.History = "FAIL"
        $result.Failures += "Execution history missing"

    }


    $result.Passed = ($result.Failures.Count -eq 0)


    return $result
}
