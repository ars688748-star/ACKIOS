Set-StrictMode -Version Latest


function New-GalaxyTimelineSubscriber {

    param(
        [object]$TimelineService,
        [object]$Bus
    )


    $Subscriber = {

        param($Event)


        $timeline = $TimelineService.BuildAndSave(
            @($Event),
            @()
        )


    }.GetNewClosure()


    $Bus.Subscribe($Subscriber)

    return $Subscriber

}
Add-Content `
.\scripts\workflow\Workflow.Galaxy.Loader.ps1 `
'. (Join-Path $GalaxyRoot "GalaxyTimelineSubscriber.ps1")'
