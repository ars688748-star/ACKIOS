function Invoke-Step {

    param(

        [Parameter(Mandatory)]
        [string]$Name,

        [Parameter(Mandatory)]
        [scriptblock]$Action,

        [switch]$ContinueOnError

    )

    $step = [WorkflowStepResult]::new()
    $step.Name = $Name
    $step.Started = Get-Date

    Write-Host ""
    Write-Host ">>> $Name"

    try {

        $result = & $Action

        if ($LASTEXITCODE -ne 0) {
            throw "$Name failed."
        }

        if ($result -eq $false) {
            throw "$Name returned failure."
        }

        $step.Status   = [WorkflowStatus]::PASS
        $step.Finished = Get-Date
        $step.Duration = $step.Finished - $step.Started

        Write-Success "$Name completed."

        return $step
    }
    catch {

        $step.Status   = [WorkflowStatus]::FAIL
        $step.Error    = $_.Exception.Message
        $step.Finished = Get-Date
        $step.Duration = $step.Finished - $step.Started

        if ($ContinueOnError) {

            Write-WarningMessage $_.Exception.Message

            return $step
        }

        Write-ErrorMessage $_.Exception.Message

        throw
    }
}
