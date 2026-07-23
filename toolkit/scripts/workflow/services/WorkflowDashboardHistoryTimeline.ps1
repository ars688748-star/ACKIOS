Set-StrictMode -Version Latest

function Get-WorkflowDashboardHistoryTimeline {

    param(
        [Parameter(Mandatory)]
        $History
    )


    $items = @()


    foreach($execution in $History){

        $items += [PSCustomObject]@{

            Timestamp =
                $execution.Timestamp

            Story =
                $execution.Story

            Status =
                $execution.Status

            Commit =
                $execution.Commit

            Duration =
                $execution.Duration

            Build =
                $execution.Build

            Tests =
                $execution.Tests

        }

    }


    return [PSCustomObject]@{

        TotalExecutions =
            $items.Count

        Items =
            $items

    }

}
