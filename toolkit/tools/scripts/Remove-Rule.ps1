param(
    [Parameter(Mandatory = $true)]
    [string]$Name
)

$ruleName = $Name

if ($ruleName -notmatch "Rule$") {
    $ruleName += "Rule"
}

$ruleFile = ".\src\engine\rules\$ruleName.ts"
$testFile = ".\src\engine\__tests__\$ruleName.test.ts"

Write-Host ""

if (Test-Path $ruleFile) {

    Remove-Item $ruleFile -Force
    Write-Host "Removed:"
    Write-Host $ruleFile
    Write-Host ""

}
else {

    Write-Host "Rule file not found:"
    Write-Host $ruleFile
    Write-Host ""

}

if (Test-Path $testFile) {

    Remove-Item $testFile -Force
    Write-Host "Removed:"
    Write-Host $testFile
    Write-Host ""

}
else {

    Write-Host "Test file not found:"
    Write-Host $testFile
    Write-Host ""

}

Write-Host "Done."
Write-Host ""
