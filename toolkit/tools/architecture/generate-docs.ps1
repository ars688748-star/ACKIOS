param(
    [Parameter(Mandatory=$true)]
    [ValidateSet("adr","rfc","spec")]
    [string]$Type,

    [Parameter(Mandatory=$true)]
    [string]$Name
)

$Date = Get-Date -Format "yyyy-MM-dd"

switch($Type){

"adr"{

    $Folder="docs\architecture\adr"

    if(!(Test-Path $Folder)){
        New-Item -ItemType Directory -Force $Folder | Out-Null
    }

    $Index=(Get-ChildItem $Folder -Filter "ADR-*.md").Count+1

    $File="{0}\ADR-{1:d4}-{2}.md" -f $Folder,$Index,$Name

@"
# ADR-$("{0:d4}" -f $Index)

## Title

$Name

## Status

Proposed

## Context

## Decision

## Consequences

## Date

$Date
"@ | Set-Content $File
}

"rfc"{

    $Folder="docs\architecture\rfc"

    if(!(Test-Path $Folder)){
        New-Item -ItemType Directory -Force $Folder | Out-Null
    }

    $File="$Folder\RFC-$Name.md"

@"
# RFC

## Title

$Name

## Motivation

## Proposal

## Alternatives

## Impact

## Date

$Date
"@ | Set-Content $File
}

"spec"{

    $Folder="docs\architecture\specification"

    if(!(Test-Path $Folder)){
        New-Item -ItemType Directory -Force $Folder | Out-Null
    }

    $File="$Folder\$Name.md"

@"
# Specification

## Purpose

## Responsibilities

## Interfaces

## Dependencies

## Future Evolution
"@ | Set-Content $File
}

}

Write-Host ""
Write-Host "Generated:"
Write-Host $File
