Set-StrictMode -Version Latest

function Render-Roadmap {

    param(
        $Workflow
    )

    $content = Get-Roadmap

    function Set-Value {

        param(
            [string]$Name,
            [string]$Value
        )

        $index = [Array]::IndexOf($content,$Name)

        if($index -ge 0){
            $content[$index + 2] = $Value
        }

    }

    Set-Value "Current Epic:"  $Workflow.CurrentEpic
    Set-Value "Current Story:" $Workflow.CurrentStory
    Set-Value "Next Story:"    $Workflow.NextStory

    Save-Roadmap $content

}
