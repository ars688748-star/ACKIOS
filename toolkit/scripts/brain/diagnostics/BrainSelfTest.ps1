function Test-Brain {

    $status = Get-BrainStatus

    [PSCustomObject]@{

        Runtime       = $status.Runtime -eq "Ready"

        Pipeline      = $status.PipelineStages -gt 0

        WorkingMemory = $status.WorkingMemoryItems -ge 0

        Diagnostics   = $null -ne $status

        Actions       = $status.RegisteredActions -gt 0

        Ready =
            ($status.Runtime -eq "Ready") -and
            ($status.PipelineStages -gt 0) -and
            ($status.RegisteredActions -gt 0)

    }

}
