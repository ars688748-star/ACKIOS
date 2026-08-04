Set-StrictMode -Version Latest


class GalaxyTimelineService {


    [object]$Builder
    [object]$Storage


    GalaxyTimelineService(
        [object]$Builder,
        [object]$Storage
    ){

        $this.Builder = $Builder
        $this.Storage = $Storage

    }


    [object] BuildAndSave(
        [object[]]$Events,
        [object[]]$History
    ){

        $timeline = $this.Builder.BuildUnifiedTimeline(
            $Events,
            $History
        )


        $this.Storage.Save(
            $timeline
        )


        return $timeline

    }


    [object[]] Load(){

        return $this.Storage.Load()

    }


}
