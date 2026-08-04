function Get-WorkflowRecoveryAnalytics {

    $history = @(Get-WorkflowExecutionHistory)

    $result = [WorkflowRecoveryAnalyticsResult]::new()


    $recoveries = @(
        $history | Where-Object {
            $_.PSObject.Properties.Name -contains "RecoveryUsed" -and $_.RecoveryUsed -eq $true
        }
    )


    $result.TotalRecoveries = $recoveries.Count


    $successful = @(
        $recoveries | Where-Object {
            $_.PSObject.Properties.Name -contains "RecoveryResult" -and $_.RecoveryResult -eq "PASS"
        }
    )


    $failed = @(
        $recoveries | Where-Object {
            $_.PSObject.Properties.Name -contains "RecoveryResult" -and $_.RecoveryResult -eq "FAIL"
        }
    )


    $result.SuccessfulRecoveries = $successful.Count

    $result.FailedRecoveries = $failed.Count


    if($result.TotalRecoveries -gt 0){

        $result.RecoveryRate =
            [math]::Round(
                ($result.SuccessfulRecoveries / $result.TotalRecoveries) * 100,
                2
            )

    }


    if($recoveries.Count -gt 0){

        $last = $recoveries[-1]

        $result.LastRecovery = $last.Timestamp
        $result.LastAction = $last.RecoveryAction

    }


    return $result

}

