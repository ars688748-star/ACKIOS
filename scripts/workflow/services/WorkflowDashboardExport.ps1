Set-StrictMode -Version Latest

function Export-WorkflowDashboardJson {

    param(
        [Parameter(Mandatory)]
        $Dashboard
    )


    $exportPath = Join-Path `
        (Resolve-AckiRoot) `
        ".work\reports\WORKFLOW_DASHBOARD.json"


    $directory = Split-Path $exportPath

    if(!(Test-Path $directory)){

        New-Item `
            -ItemType Directory `
            -Force `
            $directory | Out-Null

    }


    $exportModel = [PSCustomObject]@{

        Title =
            $Dashboard.Title

        CurrentStory =
            $Dashboard.CurrentStory

        NextStory =
            $Dashboard.NextStory


        Execution =
            $Dashboard.Execution


        Metrics = [PSCustomObject]@{

            TotalExecutions =
                $Dashboard.Metrics.TotalExecutions

            SuccessRate =
                $Dashboard.Metrics.SuccessRate

            AverageDuration =
                $Dashboard.Metrics.AverageDuration.ToString()

            LastExecutionDuration =
                $Dashboard.Metrics.LastExecutionDuration.ToString()

        }


        Quality =
            $Dashboard.Quality


        HistoryTimeline =
            $Dashboard.HistoryTimeline

    }


    $exportModel |
        ConvertTo-Json -Depth 10 |
        Set-Content $exportPath


    return $exportPath

}
