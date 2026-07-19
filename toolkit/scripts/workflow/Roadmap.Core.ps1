# ========================================
# ACKIOS Roadmap Core
# ========================================

$script:RoadmapDirectory = ".private\strategy"
$script:RoadmapFile = Join-Path $script:RoadmapDirectory "ACKIOS_MASTER_ROADMAP.md"

function Test-Roadmap {

    return Test-Path $script:RoadmapFile

}

function Get-Roadmap {

    if (!(Test-Roadmap)) {

        throw "MASTER ROADMAP not found."

    }

    return Get-Content $script:RoadmapFile

}

function Save-Roadmap {

    param(

        [string[]]$Content

    )

    $Content | Set-Content $script:RoadmapFile -Encoding UTF8

}


function Get-RoadmapCurrentStory {

    return (Get-RoadmapState).CurrentStory

}

function Get-RoadmapNextStory {

    return (Get-RoadmapState).NextStory

}


function Get-RoadmapState {

    $content = Get-Roadmap

    function Get-Value {

        param([string]$Name)

        $index = [Array]::IndexOf($content,$Name)

        if($index -lt 0){
            throw "$Name not found."
        }

        return $content[$index+2].Trim()

    }

    return @{

        CurrentEpic  = Get-Value "Current Epic:"
        CurrentStory = Get-Value "Current Story:"
        NextStory    = Get-Value "Next Story:"

    }

}

function Get-RoadmapCurrentStory {

    return (Get-RoadmapState).CurrentStory

}

function Get-RoadmapNextStory {

    return (Get-RoadmapState).NextStory

}


