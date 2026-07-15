function Invoke-Step {

    param(

        [Parameter(Mandatory)]
        [string]$Name,

        [Parameter(Mandatory)]
        [scriptblock]$Action,

        [switch]$ContinueOnError

    )

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

        Write-Success "$Name completed."

        return

    }
    catch {

        if ($ContinueOnError) {

            Write-WarningMessage $_.Exception.Message

            return

        }

        Write-ErrorMessage $_.Exception.Message
        throw

    }

}



