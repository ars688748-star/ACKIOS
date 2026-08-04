class BrainAction
{
    [string]$Id

    [string]$Name

    [string]$Category

    [int]$Priority = 0

    [scriptblock]$Handler

    [bool]$Enabled = $true

    [hashtable]$Metadata = @{}
}
