function New-StoryTemplate {

    param(
        [Parameter(Mandatory)]
        [string]$StoryId
    )

@"
# Story $StoryId

## Title

Workflow improvement $StoryId

## Description

Continue improving ACKIOS workflow automation.

## Status

Planned

## Definition of Done

- Build PASS
- Tests PASS
"@

}
