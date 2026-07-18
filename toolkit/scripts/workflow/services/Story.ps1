function Get-NextStoryId {

    param(
        [Parameter(Mandatory)]
        [string]$Story
    )

    $parts = $Story.Split('.')

    if ($parts.Count -ne 2) {
        throw "Invalid story format: $Story"
    }

    "{0}.{1}" -f $parts[0],([int]$parts[1] + 1)

}
