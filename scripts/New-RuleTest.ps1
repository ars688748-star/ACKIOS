param(
    [Parameter(Mandatory = $true)]
    [string]$Name
)

$ErrorActionPreference = "Stop"

$ruleName = $Name

if ($ruleName -notmatch "Rule$") {
    $ruleName += "Rule"
}

$templateFile = ".\scripts\Templates\RuleTest.tpl"

if (!(Test-Path $templateFile)) {
    throw "RuleTest.tpl not found."
}

$testDir = ".\src\engine\__tests__"

if (!(Test-Path $testDir)) {
    New-Item -ItemType Directory -Force $testDir | Out-Null
}

$file = "$testDir\$ruleName.test.ts"

if (Test-Path $file) {

    Write-Host ""
    Write-Host "$ruleName test already exists."
    Write-Host ""

    exit 0

}

$content = Get-Content $templateFile -Raw

$content = $content.Replace(
    "{{RuleName}}",
    $ruleName
)

$utf8 = New-Object System.Text.UTF8Encoding($false)

[System.IO.File]::WriteAllText(
    (Resolve-Path $testDir).Path + "\" + (Split-Path $file -Leaf),
    $content,
    $utf8
)

Write-Host ""
Write-Host "Created:"
Write-Host $file
Write-Host ""
