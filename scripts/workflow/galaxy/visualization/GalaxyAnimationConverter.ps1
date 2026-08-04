Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyAnimationState.ps1"


function Convert-AckiosInteractiveToAnimationState {

    param(
        [object]$InteractiveGalaxy
    )


    $state = [GalaxyAnimationState]::new()


    foreach($node in $InteractiveGalaxy.Nodes){


        $animationNode = [GalaxyAnimationNodeState]::new()

        $animationNode.NodeId = $node.Id

        $animationNode.State = $node.ActivityLevel

        $animationNode.Event = $node.LastEvent

        $animationNode.Timestamp = Get-Date


        if($node.LastChange){

            $animationNode.PreviousState = $node.LastChange

        }


        $state.Nodes += $animationNode


    }


    return $state

}
