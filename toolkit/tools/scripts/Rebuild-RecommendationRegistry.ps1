$recommendationsPath = ".\src\engine\recommendations"
$output = ".\src\engine\RecommendationRegistry.ts"

$files = Get-ChildItem $recommendationsPath -Filter "*Recommendation.ts" |
    Sort-Object Name

$imports = @()
$instances = @()

foreach ($file in $files) {

    $name = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)

    $imports += "import { $name } from `"./recommendations/$name.js`";"
    $instances += "        new $name()"

}

$content = @"
import { RecommendationProvider } from "./contracts/RecommendationProvider.js";

$($imports -join "`r`n")

export function createRecommendationProviders():
    RecommendationProvider[] {

    return [

$($instances -join ",`r`n")

    ];

}
"@

$utf8 = New-Object System.Text.UTF8Encoding($false)

[System.IO.File]::WriteAllText(
    (Resolve-Path ".\src\engine").Path + "\RecommendationRegistry.ts",
    $content,
    $utf8
)

Write-Host ""
Write-Host "RecommendationRegistry generated." -ForegroundColor Green
Write-Host ""
