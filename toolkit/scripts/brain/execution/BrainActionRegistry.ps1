$script:BrainActions = @{}

function Register-BrainAction
{
    param(
        [Parameter(Mandatory)]
        [BrainAction]$Action
    )

    $script:BrainActions[$Action.Name] = $Action
}

function Get-BrainAction
{
    param(
        [Parameter(Mandatory)]
        [string]$Name
    )

    return $script:BrainActions[$Name]
}

function Get-BrainActions
{
    return $script:BrainActions.Values
}
