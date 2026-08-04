Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyGraph.ps1"
. "$PSScriptRoot\GalaxyChangeRecord.ps1"

function Process-AckiosGalaxyEvents {

    param(
        [object]$Galaxy,
        [object[]]$Events,
        [object]$History
    )

    foreach($event in $Events){

        foreach($node in $Galaxy.GetNodes()){

            if($node.Id -eq $event.Source.ToLower()){

                $node.Metadata["LastEvent"] = $event.Name
                $node.Metadata["EventTime"] = $event.Timestamp

                if($event.Data){

                    foreach($key in $event.Data.Keys){
                        $node.Metadata[$key] = $event.Data[$key]
                    }

                }

                if($History){

                    $record = [GalaxyChangeRecord]::new(
                        $node.Id,
                        $event.Name,
                        $event.Data
                    )

                    $History.AddChange($record)

                }

            }

        }

    }

    return $Galaxy

}
