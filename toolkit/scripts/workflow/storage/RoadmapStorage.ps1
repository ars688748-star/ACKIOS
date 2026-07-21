Set-StrictMode -Version Latest
$script:RoadmapDirectory = ".private\strategy"
$script:RoadmapFile = Join-Path $script:RoadmapDirectory "ACKIOS_MASTER_ROADMAP.md"
function Test-Roadmap {
    Test-Path $script:RoadmapFile
}
function Get-Roadmap {
    if (!(Test-Roadmap)) {
        throw "MASTER ROADMAP not found."
    }
    Get-Content $script:RoadmapFile
}
function Save-Roadmap {
    param(
        [string[]]$Content
    )
    $Content | Set-Content $script:RoadmapFile -Encoding UTF8
}
