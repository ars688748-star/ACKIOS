Set-StrictMode -Version Latest

function Show-WorkflowInsights {

    param(
        $Decision,
        $Intelligence,
        $Diagnostics,
        $Trace
    )

    Write-Host ""
    Write-Host "========================================" -ForegroundColor DarkCyan
    Write-Host " WORKFLOW INSIGHTS" -ForegroundColor DarkCyan
    Write-Host "========================================" -ForegroundColor DarkCyan
    Write-Host ""

    if($Decision){

        Write-Host "Decision"
        Write-Host "--------"

        Write-Host ("Status       : {0}" -f $Decision.Status)
        Write-Host ("Decision     : {0}" -f $Decision.Decision)
        Write-Host ("Priority     : {0}" -f $Decision.Priority)

        if($Decision.WinningRule){

            Write-Host ("Winning Rule : {0}" -f $Decision.WinningRule)

        }

        Write-Host ""

    }


    if($Intelligence){

        Write-Host "Intelligence"
        Write-Host "------------"

        Write-Host ("Status          : {0}" -f $Intelligence.Status)
        Write-Host ("Performance     : {0}" -f $Intelligence.PerformanceScore)
        Write-Host ("Success Rate    : {0}" -f $Intelligence.SuccessRate)
        Write-Host ("Trend           : {0}" -f $Intelligence.Trend)
        Write-Host ("Reliability     : {0}" -f $Intelligence.ReliabilityTrend)

        Write-Host ""

    }


    if($Diagnostics){

        Write-Host "Diagnostics"
        Write-Host "-----------"

        Write-Host ("Services : {0}" -f $Diagnostics.Services)
        Write-Host ("Models   : {0}" -f $Diagnostics.Models)
        Write-Host ("State    : {0}" -f $Diagnostics.State)
        Write-Host ("Roadmap  : {0}" -f $Diagnostics.Roadmap)
        Write-Host ("History  : {0}" -f $Diagnostics.History)
        Write-Host ("Passed   : {0}" -f $Diagnostics.Passed)

        Write-Host ""

    }


    if($Trace -and $Trace.Count -gt 0){

        Write-Host "Execution Trace"
        Write-Host "----------------"

        foreach($item in $Trace){

            Write-Host (
                "{0,-30} {1,-10} {2}ms" -f `
                $item.Rule,
                $item.Priority,
                $item.DurationMs
            )

        }

        Write-Host ""

    }

}
