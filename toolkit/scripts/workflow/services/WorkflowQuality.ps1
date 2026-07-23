Set-StrictMode -Version Latest

function Get-WorkflowQuality {

    $story = Test-StoryCatalog

    [PSCustomObject]@{

        Healthy = ($story.Warnings -eq 0)

        StoryCatalog = [PSCustomObject]@{

            Total = $story.Total
            Valid = $story.Valid
            Warnings = $story.Warnings

        }

    }

}
