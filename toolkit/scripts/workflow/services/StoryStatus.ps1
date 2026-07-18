function Set-StoryStatus {

    param(
        [Parameter(Mandatory)]
        [string]$StoryId,

        [Parameter(Mandatory)]
        [ValidateSet("Planned","In Progress","Completed")]
        [string]$Status
    )

    $root = Resolve-AckiRoot
    $path = Join-Path $root "docs\stories\$StoryId.md"

    if (-not (Test-Path $path)) {
        throw "Story '$StoryId' not found."
    }

    $content = Get-Content $path -Raw

    if ($content -match '(?ms)^## Status') {
        $content = [regex]::Replace(
            $content,
            '(?ms)^## Status\s*(.+?)\s*(\z)',
            "## Status`r`n`r`n$Status`r`n"
        )
    }
    else {
        $content = $content.TrimEnd() + "`r`n`r`n## Status`r`n`r`n$Status`r`n"
    }

    Set-Content $path $content

    Get-Story $StoryId
}
