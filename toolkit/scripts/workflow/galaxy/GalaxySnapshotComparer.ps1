Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyDiffResult.ps1"


function ConvertTo-MetadataHashtable {

    param(
        [object]$Metadata
    )

    $result = @{}

    if($Metadata -is [hashtable]){

        foreach($key in $Metadata.Keys){

            $result[$key] = $Metadata[$key]

        }

    }
    else {

        foreach($property in $Metadata.PSObject.Properties.Name){

            $result[$property] = $Metadata.$property

        }

    }

    return $result

}


function Compare-AckiosGalaxySnapshots {

    param(
        [object]$SnapshotA,
        [object]$SnapshotB
    )


    $result = [GalaxyDiffResult]::new()

    $nodesA = $SnapshotA.Model.Nodes
    $nodesB = $SnapshotB.Model.Nodes


    foreach($node in $nodesB){

        if(-not($nodesA.Id -contains $node.Id)){

            $result.AddedNodes += $node

        }

    }


    foreach($node in $nodesA){

        if(-not($nodesB.Id -contains $node.Id)){

            $result.RemovedNodes += $node

        }

    }


    foreach($nodeB in $nodesB){

        $nodeA = $nodesA |
            Where-Object {$_.Id -eq $nodeB.Id}


        if($nodeA){

            if(
                ($nodeA.Status -ne $nodeB.Status) -or
                ($nodeA.Category -ne $nodeB.Category)
            ){

                $result.ChangedNodes += $nodeB

            }


            if($nodeA.Metadata -and $nodeB.Metadata){

                $metadataA = ConvertTo-MetadataHashtable $nodeA.Metadata
                $metadataB = ConvertTo-MetadataHashtable $nodeB.Metadata


                $IgnoredMetadata = @(
    "Timestamp",
    "Discovered"
)

foreach($property in $metadataB.Keys){

    if($IgnoredMetadata -contains $property){

        continue

    }

                    $before = $metadataA[$property]
                    $after = $metadataB[$property]


                    if("$before" -ne "$after"){

                        $result.MetadataChanges += @{

                            Node = $nodeB.Id
                            Property = $property
                            Before = $before
                            After = $after

                        }

                    }

                }

            }

        }

    }


    return $result

}

