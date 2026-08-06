Set-StrictMode -Version Latest

function Invoke-GuardianEndChat {

    Write-Host ""
    Write-Host "[ Guardian ] Preparing publication snapshot..." -ForegroundColor Cyan
    Write-Host ""

    node "$PSScriptRoot\..\..\dist\bin\acki.js" publish

}
