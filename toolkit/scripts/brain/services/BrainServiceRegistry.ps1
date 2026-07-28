function Register-BrainService
{
    param(
        [Parameter(Mandatory)]
        [string]$Name,

        [Parameter(Mandatory)]
        [object]$Service
    )

    (Get-BrainState).Services[$Name] = $Service
}

function Get-BrainService
{
    param(
        [Parameter(Mandatory)]
        [string]$Name
    )

    return (Get-BrainState).Services[$Name]
}

function Get-BrainServices
{
    return (Get-BrainState).Services
}
