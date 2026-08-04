Set-StrictMode -Version Latest

function Show-AckiosGalaxyTimeline {

    param(
        [object]$Timeline
    )


    foreach($record in $Timeline.GetRecords()){


        Write-Host ""
        Write-Host "=============================="
        Write-Host "ACKIOS GALAXY EVENT"
        Write-Host "=============================="


        Write-Host "Time:"
        Write-Host $record.Timestamp


        Write-Host "Type:"
        Write-Host $record.Type


        Write-Host "Source:"
        Write-Host $record.Source



        if($record.Type -eq "GalaxyChange"){


            foreach($change in $record.Data){


                Write-Host ""

                Write-Host "Node:"
                Write-Host $change.Node

                Write-Host "Property:"
                Write-Host $change.Property

                Write-Host "Before:"
                Write-Host $change.Before

                Write-Host "After:"
                Write-Host $change.After

            }


        }
        elseif($record.Type -eq "GalaxyEvent"){


            Write-Host ""

            Write-Host "Event:"
            Write-Host $record.Data.Name


            Write-Host "Source:"
            Write-Host $record.Data.Source


            Write-Host "Data:"

            foreach($key in $record.Data.Data.Keys){

                Write-Host "$key : $($record.Data.Data[$key])"

            }

        }


    }

}
