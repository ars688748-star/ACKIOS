function Get-Story {

    param(
        [Parameter(Mandatory)]
        [string]$StoryId
    )

    $root = Resolve-AckiRoot
    $path = Join-Path $root "docs\stories\$StoryId.md"

    if (-not (Test-Path $path)) {
        return $null
    }

    $content = Get-Content $path -Raw

    [pscustomobject]@{
        Id          = $StoryId
        Path        = $path
        Content     = $content

        Title = if ($content -match '(?ms)^## Title\s*(.+?)\s*^##') {
            $matches[1].Trim()
        } else {
            ""
        }

        Description = if ($content -match '(?ms)^## Description\s*(.+?)\s*^##') {
            $matches[1].Trim()
        } else {
            ""
        }

        Status = if ($content -match '(?ms)^## Status\s*(.+?)\s*(^##|\z)') {
            $matches[1].Trim()
        } else {
            "Unknown"
        }
    }

}
