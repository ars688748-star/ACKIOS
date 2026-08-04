Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyInteractiveModel.ps1"


function Convert-AckiosGalaxyViewToInteractiveModel {

    param(
        [object]$GalaxyView
    )


    $model = [GalaxyInteractiveModel]::new()


    foreach($node in $GalaxyView.Nodes){

        $visualNode = [GalaxyInteractiveNode]::new()

        $visualNode.Id = $node.Id
        $visualNode.Label = $node.Name
        $visualNode.Category = $node.Type
        $visualNode.Status = $node.Status
        $nodeEvents = @(
            $GalaxyView.Events |
            Where-Object {
                $_.Source -eq $node.Id
            }
        )


        $nodeChanges = @(
            $GalaxyView.Changes |
            Where-Object {
                $_.Data.NodeId -eq $node.Id
            }
        )


        $visualNode.EventCount = $nodeEvents.Count
        $visualNode.HistoryCount = $nodeChanges.Count
        $visualNode.Events = $nodeEvents


        if($nodeEvents.Count -gt 0){

            $visualNode.LastEvent = (
                $nodeEvents |
                Sort-Object Timestamp -Descending |
                Select-Object -First 1
            ).Data.Name

        }


        if($nodeChanges.Count -gt 0){

            $visualNode.LastChange = (
                $nodeChanges |
                Sort-Object Timestamp -Descending |
                Select-Object -First 1
            ).Data.EventName

        }


        $activity = $visualNode.EventCount + $visualNode.HistoryCount


        if($activity -eq 0){

            $visualNode.ActivityLevel = "NONE"

        }
        elseif($activity -ge 3){

            $visualNode.ActivityLevel = "HIGH"

        }
        else {

            $visualNode.ActivityLevel = "NORMAL"

        }


        
        switch($node.Type){

            "CORE" {
                $visualNode.Size = 5
            }

            "RUNTIME" {
                $visualNode.Size = 4
            }

            "SYSTEM" {
                $visualNode.Size = 3
            }

            "ENGINE" {
                $visualNode.Size = 2
            }

            "MONITORING" {
                $visualNode.Size = 2
            }

            default {
                $visualNode.Size = 1
            }

        }



        $model.Nodes += $visualNode

    }


    foreach($edge in $GalaxyView.Edges){

        $visualEdge = [GalaxyInteractiveEdge]::new()

        $visualEdge.Source = $edge.From
        $visualEdge.Target = $edge.To
        $visualEdge.Relation = $edge.Relation

        $model.Edges += $visualEdge

    }


    $model.Events = $GalaxyView.Events


    return $model

}




