param(
    [Parameter(Mandatory=$true)]
    [ValidateSet("verify","analyze","context","sprint")]
    [string]$Command
)

switch ($Command) {

    "verify" {
        Write-Host ""
        Write-Host "ACKIOS VERIFY"
        Write-Host "-------------"

        git status --short

        if ($LASTEXITCODE -ne 0) {
            exit 1
        }

        Write-Host ""
        Write-Host "VERIFY OK"
    }

    "analyze" {
        Write-Host "ANALYZE - TODO"
    }

    "context" {
        Write-Host "CONTEXT - TODO"
    }

    "sprint" {
        Write-Host "SPRINT - TODO"
    }

}
