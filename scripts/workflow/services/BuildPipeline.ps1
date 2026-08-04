function Invoke-Build {

    param(

        [switch]$ContinueOnError

    )

    try {

        & (Join-Path (Resolve-ScriptsPath) "Build.ps1")

        return $true

    }
    catch {

        if ($ContinueOnError) {

            Write-WarningMessage $_.Exception.Message

            return

        }

        throw

    }

}

function Invoke-Tests {

    npm test

    if ($LASTEXITCODE -ne 0) {
        throw "Tests failed."
    }

}
