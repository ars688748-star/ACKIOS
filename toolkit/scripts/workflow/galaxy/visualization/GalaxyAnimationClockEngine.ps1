Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyAnimationClock.ps1"


function New-AckiosAnimationClock {

    param(
        [object]$Playback
    )


    $clock = [GalaxyAnimationClock]::new()


    $clock.TotalFrames =
        $Playback.Frames.Count

    $clock.Duration =
        $Playback.Duration


    return $clock

}



function Update-AckiosAnimationClock {

    param(
        [object]$Clock,
        [int]$ElapsedMilliseconds
    )


    $Clock.ElapsedMilliseconds =
        $ElapsedMilliseconds


    if($Clock.Duration -gt 0){

        $ratio =
            $ElapsedMilliseconds / $Clock.Duration


        if($ratio -gt 1){
            $ratio = 1
        }


        $Clock.Progress =
            [int]($ratio * 100)


        $Clock.CurrentFrame =
            [int](($Clock.TotalFrames - 1) * $ratio)

    }


    return $Clock

}
