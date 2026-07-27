class BrainActionResult
{
    [string]$ActionId

    [string]$ActionName

    [datetime]$StartedAt

    [datetime]$FinishedAt

    [timespan]$Duration

    [bool]$Success

    [object]$Output

    [string]$Message

    [System.Collections.ArrayList]$Errors =
        [System.Collections.ArrayList]::new()
}
