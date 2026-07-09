param(
    [Parameter(Mandatory = $true)]
    [string]$Name
)

$ErrorActionPreference = "Stop"

$ruleName = $Name

if ($ruleName -notmatch "Rule$") {
    $ruleName += "Rule"
}

$templateFile = ".\scripts\Templates\Rule.tpl"

if (!(Test-Path $templateFile)) {

    Write-Host ""
    Write-Host "[ERROR] Rule.tpl not found." -ForegroundColor Red
    Write-Host ""

    exit 1

}

$file = ".\src\engine\rules\$ruleName.ts"

if (Test-Path $file) {

    Write-Host ""
    Write-Host "$ruleName already exists."
    Write-Host ""

    exit 0

}

$content = Get-Content $templateFile -Raw

$content = $content.Replace(
    "{{RuleName}}",
    $ruleName
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

if (Test-Path ".\scripts\Register-Rule.ps1") {

    & ".\scripts\Register-Rule.ps1" $ruleName

}

Write-Host ""
Write-Host "Done."
Write-Host ""
