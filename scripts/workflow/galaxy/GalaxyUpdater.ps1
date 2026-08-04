Set-StrictMode -Version Latest

. "$PSScriptRoot\GalaxyGraph.ps1"

function Update-AckiosGalaxy {

    param(
        [object]$Galaxy
    )

    foreach($node in $Galaxy.GetNodes()){

        switch($node.Id){

            "runtime" {
                $strategy = Get-RuntimeStrategy

                $node.Metadata = @{
                    Status = "RUNNING"
                    Strategy = $strategy.Mode
                    Workers = $strategy.Workers
                }
            }

            "platform" {
                $health = Get-PlatformHealth

                $node.Metadata = @{
                    Healthy = $health.Healthy
                    Adapter = $health.Adapter.GetType().Name
                }
            }

            "diagnostics" {
                $diag = Get-AckiosDiagnostics

                $node.Metadata = @{
                    Healthy = $diag.Healthy
                    CheckedAt = $diag.CheckedAt
                }
            }

        }

    }

    return $Galaxy

}
