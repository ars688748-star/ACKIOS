param(
    [Parameter(Mandatory = $true)]
    [string]$Name
)

$recommendationName = $Name

if ($recommendationName -notmatch "Recommendation$") {
    $recommendationName += "Recommendation"
}

$path = ".\src\engine\recommendations\$recommendationName.ts"

if (Test-Path $path) {

    Write-Host ""
    Write-Host "$recommendationName already exists."
    Write-Host ""

    exit

}

$issueId = $Name.ToLower()

@"
import { AnalysisIssue } from "../AnalysisIssue.js";
import { Recommendation } from "../Recommendation.js";

import { RecommendationProvider } from "../contracts/RecommendationProvider.js";

export class $recommendationName
    implements RecommendationProvider {

    public supports(
        issue: AnalysisIssue
    ): boolean {

        return issue.id === "$issueId";

    }

    public create(
        _issue: AnalysisIssue
    ): Recommendation {

        return {

            id: "recommendation.$issueId",

            priority: "medium",

            title: "$Name recommendation",

            description:
                "Describe how to resolve this issue."

        };

    }

}
"@ | Set-Content $path -Encoding UTF8

Write-Host ""
Write-Host "Created:"
Write-Host $path
Write-Host ""

if (Test-Path ".\scripts\Register-Recommendation.ps1") {

    & ".\scripts\Register-Recommendation.ps1" $recommendationName

}

Write-Host ""
Write-Host "Done."
Write-Host ""
