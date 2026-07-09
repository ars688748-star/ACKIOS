Set-StrictMode -Version Latest

$ErrorActionPreference = "Stop"

function Write-Header {

    param(
        [Parameter(Mandatory)]
        [string]$Title
    )

    Write-Host ""
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host " $Title" -ForegroundColor Cyan
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host ""

}

function Write-Info {

    param([string]$Message)

    Write-Host "[INFO] $Message" -ForegroundColor Cyan

}

function Write-Success {

    param([string]$Message)

    Write-Host "[ OK ] $Message" -ForegroundColor Green

}

function Write-WarningMessage {

    param([string]$Message)

    Write-Host "[WARN] $Message" -ForegroundColor Yellow

}

function Write-ErrorMessage {

    param([string]$Message)

    Write-Host "[FAIL] $Message" -ForegroundColor Red

}

function Write-Separator {

    Write-Host ""
    Write-Host "----------------------------------------" -ForegroundColor DarkGray
    Write-Host ""

}