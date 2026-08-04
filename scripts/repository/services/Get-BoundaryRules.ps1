
function Get-BoundaryRules {

    $rulesFile = Join-Path (Resolve-AckiRoot) ".private\architecture\40_POLICIES\rules\BOUNDARY_RULES.json"

    if (!(Test-Path $rulesFile)) {
        throw "Boundary rules file not found: $rulesFile"
    }

    return Get-Content $rulesFile -Raw | ConvertFrom-Json

}

