param(
    [Parameter(Mandatory = $true)]
    [string]$Name
)

$ErrorActionPreference = "Stop"

$scannerName = $Name

if ($scannerName -notmatch "Scanner$") {
    $scannerName += "Scanner"
}

$resultName = $scannerName.Replace(
    "Scanner",
    "ScanResult"
)

$templateFile = ".\scripts\Templates\Scanner.tpl"

if (!(Test-Path $templateFile)) {

    Write-Host ""
    Write-Host "[ERROR] Scanner.tpl not found." -ForegroundColor Red
    Write-Host ""

    exit 1

}

$file = ".\src\scanner\$scannerName.ts"

if (Test-Path $file) {

    Write-Host ""
    Write-Host "$scannerName already exists."
    Write-Host ""

    exit 0

}

$content = Get-Content $templateFile -Raw

$content = $content.Replace(
    "{{ScannerName}}",
    $scannerName
)

$content = $content.Replace(
    "{{ScanResult}}",
    $resultName
)

$directory = Split-Path $file

if (!(Test-Path $directory)) {

    New-Item -ItemType Directory -Force $directory | Out-Null

}

$utf8 = New-Object System.Text.UTF8Encoding($false)

[System.IO.File]::WriteAllText(
    (Resolve-Path $directory).Path + "\" + (Split-Path $file -Leaf),
    $content,
    $utf8
)

Write-Host ""
Write-Host "Created:"
Write-Host $file
Write-Host ""

if (Test-Path ".\scripts\Register-Scanner.ps1") {

    & ".\scripts\Register-Scanner.ps1"

}

Write-Host ""
Write-Host "Done."
Write-Host ""
