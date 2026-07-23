Set-StrictMode -Version Latest

. "$PSScriptRoot\..\models\StoryCatalogValidationResult.ps1"

function Test-StoryCatalog {

    param(
        [switch]$Quiet
    )

    $catalog = Get-StoryCatalog

    $result = [StoryCatalogValidationResult]::new()

    $result.Total = $catalog.Count
    $result.Valid = 0
    $result.Warnings = 0

    foreach($story in $catalog){

        $valid = $true

        if([string]::IsNullOrWhiteSpace($story.Title) -or $story.Title -eq "TBD"){
            if(-not $Quiet){
                Write-Warning "$($story.Id): invalid Title"
            }
            $valid = $false
            $result.Warnings++
        }

        if([string]::IsNullOrWhiteSpace($story.Description) -or
           $story.Description -match "^Describe the work"){
            if(-not $Quiet){
                Write-Warning "$($story.Id): invalid Description"
            }
            $valid = $false
            $result.Warnings++
        }

        if([string]::IsNullOrWhiteSpace($story.Status) -or
           $story.Status -eq "Unknown"){
            if(-not $Quiet){
                Write-Warning "$($story.Id): missing Status"
            }
            $valid = $false
            $result.Warnings++
        }

        if($valid){
            $result.Valid++
        }
    }

    return $result
}
