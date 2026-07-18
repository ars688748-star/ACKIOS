function New-StoryTemplate {

    param(
        [Parameter(Mandatory)]
        [string]$StoryId
    )

@"
# Story $StoryId

## Title

TBD

## Description

Describe the work to be completed.

## Definition of Done

- Build PASS
- Tests PASS
"@

}
