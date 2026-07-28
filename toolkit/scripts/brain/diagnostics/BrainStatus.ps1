function Get-BrainStatus {

    $memory = Get-WorkingMemorySnapshot

    [PSCustomObject]@{

        Runtime             = "Ready"

        PowerShellVersion   = $PSVersionTable.PSVersion.ToString()

        WorkingMemoryItems  = $memory.Count

        PipelineStages      = (Get-BrainPipelineStages).Count

        RegisteredActions   = (Get-BrainActions).Count

        GeneratedAt         = Get-Date

    }

}
