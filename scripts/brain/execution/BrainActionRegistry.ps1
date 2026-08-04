function Register-BrainAction
{
    param(
        [Parameter(Mandatory)]
        [BrainAction]$Action
    )

    (Get-BrainState).Actions[$Action.Name] = $Action
}

function Get-BrainAction
{
    param(
        [Parameter(Mandatory)]
        [string]$Name
    )

    return (Get-BrainState).Actions[$Name]
}

function Get-BrainActions
{
    return (Get-BrainState).Actions.Values
}
