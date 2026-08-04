function Write-Utf8NoBom {

    param(
        [Parameter(Mandatory = $true)]
        [string]$Path,

        [Parameter(Mandatory = $true)]
        [string]$Content
    )

    $directory = Split-Path $Path

    if ($directory -and !(Test-Path $directory)) {
        New-Item -ItemType Directory -Force $directory | Out-Null
    }

    $utf8 = New-Object System.Text.UTF8Encoding($false)

    [System.IO.File]::WriteAllText(
        (Resolve-Path $directory).Path + "\" + (Split-Path $Path -Leaf),
        $Content,
        $utf8
    )

}

function Write-Header {

    param(
        [string]$Title
    )

    Write-Host ""
    Write-Host "==============================="
    Write-Host " $Title"
    Write-Host "==============================="
    Write-Host ""

}

function Write-Success {

    param(
        [string]$Message
    )

    Write-Host "[OK] $Message" -ForegroundColor Green

}

function Write-WarningMessage {

    param(
        [string]$Message
    )

    Write-Host "[WARN] $Message" -ForegroundColor Yellow

}

function Write-ErrorMessage {

    param(
        [string]$Message
    )

    Write-Host "[ERROR] $Message" -ForegroundColor Red

}
