Set-StrictMode -Version Latest


$PipelineHistoryPath = Join-Path `
    $PSScriptRoot "..\storage\pipelines\PIPELINE_HISTORY.json"



function Save-WorkflowPipelineRecord {

    param(
        [Parameter(Mandatory)]
        $Record
    )


    $directory = Split-Path $PipelineHistoryPath


    if(!(Test-Path $directory)){

        New-Item `
            -ItemType Directory `
            -Force `
            $directory | Out-Null

    }


    if(Test-Path $PipelineHistoryPath){

        $history = Get-Content `
            $PipelineHistoryPath `
            -Raw |
        ConvertFrom-Json

        $history = @($history)

    }
    else {

        $history = @()

    }


    $history = @($history) + $Record


    $history |
        ConvertTo-Json -Depth 5 |
        Set-Content $PipelineHistoryPath


}



function Get-WorkflowPipelineHistory {


    if(!(Test-Path $PipelineHistoryPath)){

        return @()

    }


    return @(
        Get-Content `
            $PipelineHistoryPath `
            -Raw |
        ConvertFrom-Json
    )

}

