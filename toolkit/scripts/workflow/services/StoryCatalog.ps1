function Ensure-StoryExists {

    param(
        [Parameter(Mandatory)]
        [string]$StoryId
    )

    $root = Resolve-AckiRoot
    $path = Join-Path $root "docs\stories\$StoryId.md"

    if (Test-Path $path) {
        return
    }

    New-StoryTemplate $StoryId | Set-Content $path

    Write-Success "Story $StoryId created."
}
