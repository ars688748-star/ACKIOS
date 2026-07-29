Set-StrictMode -Version Latest

function Update-AckiosGalaxyState {

    param(
        [object]$Galaxy
    )

    foreach($node in $Galaxy.GetNodes()){

        switch($node.Id){

            "runtime" {
                $node.Metadata = @{
                    Status = "RUNNING"
                    Strategy = (Get-RuntimeStrategy).Mode
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
                }
            }

        }

    }

    return $Galaxy

}
