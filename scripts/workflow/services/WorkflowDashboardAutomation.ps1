Set-StrictMode -Version Latest


function Test-WorkflowDashboardHealth {

    param(
        $Dashboard
    )


    if($null -eq $Dashboard){

        return $false

    }


    if($null -eq $Dashboard.LastExecution -or $Dashboard.LastExecution.Count -eq 0){

        return $false

    }


    if($Dashboard.Build -ne "PASS"){

        return $false

    }


    if($Dashboard.Tests -ne "PASS"){

        return $false

    }


    return $true

}



function Invoke-WorkflowDashboardAutomation {


    $dashboard = Get-WorkflowExecutionDashboard


    $healthy = Test-WorkflowDashboardHealth $dashboard


    if($healthy){

        $report = New-WorkflowDashboardReport $dashboard

        Save-WorkflowDashboardReport $report | Out-Null

    }


    return [PSCustomObject]@{

        Dashboard = $dashboard

        Healthy = $healthy

    }

}

