$rulesPath = ".\src\engine\rules"
$output = ".\src\engine\RuleRegistry.ts"

$files = Get-ChildItem $rulesPath -Filter "*Rule.ts" |
    Sort-Object Name

$imports = @()
$instances = @()

foreach ($file in $files) {

    $name = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)

    $imports += "import { $name } from `"./rules/$name.js`";"
    $instances += "        new $name()"

}

$content = @"
import { Rule } from "./contracts/Rule.js";

$($imports -join "`r`n")

export function createRules(): Rule[] {

    return [

$($instances -join ",`r`n")

    ];

}
"@

$utf8 = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText(
    (Resolve-Path ".\src\engine").Path + "\RuleRegistry.ts",
    $content,
    $utf8
)

Write-Host ""
Write-Host "RuleRegistry generated."
Write-Host ""
