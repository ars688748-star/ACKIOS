Set-StrictMode -Version Latest


function New-GalaxyHistoryTimelineSubscriber {

    param(
        [object]$TimelineService,
        [object]$History
    )


    $Subscriber = {

        param($Change)


        $TimelineService.BuildAndSave(
            @(),
            @($Change)
        )


    }.GetNewClosure()


    $History.Subscribe($Subscriber)

    return $Subscriber

}
