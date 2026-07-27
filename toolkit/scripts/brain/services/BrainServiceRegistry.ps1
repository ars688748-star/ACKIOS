$script:BrainServices = @{}

function Register-BrainService
{
    param(
        [Parameter(Mandatory)]
        [string]$Name,

        [Parameter(Mandatory)]
        [object]$Service
    )

    $script:BrainServices[$Name] = $Service
}

function Get-BrainService
{
    param(
        [Parameter(Mandatory)]
        [string]$Name
    )

    return $script:BrainServices[$Name]
}

function Get-BrainServices
{
    return $script:BrainServices
}
