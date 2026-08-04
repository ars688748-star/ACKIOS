Set-StrictMode -Version Latest


function Convert-AckiosGalaxyNodeToRendererNode {

    param(
        [object]$Node
    )


    return [pscustomobject]@{

        Id =
            $Node.Id

        Label =
            $Node.Name

        Category =
            $Node.Type

        Status =
            $Node.Status

        Size =
            switch($Node.Type){

                "CORE" {5}
                "RUNTIME" {4}
                "SYSTEM" {3}
                "ENGINE" {2}
                "MONITORING" {2}

                default {1}

            }

    }

}
