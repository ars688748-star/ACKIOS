. "$PSScriptRoot\..\core\PowerShellRuntime.ps1"

Test-AckiosRuntime
$BrainRoot = Split-Path -Parent $PSCommandPath



. (Join-Path $BrainRoot "models\BrainRuntimeContextResult.ps1")

. (Join-Path $BrainRoot "state\BrainState.ps1")
. (Join-Path $BrainRoot "services\BrainServiceRegistry.ps1")
. (Join-Path $BrainRoot "services\BrainServiceBootstrap.ps1")

. (Join-Path $BrainRoot "working-memory\WorkingMemoryContextResult.ps1")
. (Join-Path $BrainRoot "working-memory\WorkingMemoryStore.ps1")
. (Join-Path $BrainRoot "working-memory\WorkingMemoryService.ps1")
. (Join-Path $BrainRoot "working-memory\WorkingMemoryManager.ps1")
. (Join-Path $BrainRoot "memory\MemoryContextResult.ps1")
. (Join-Path $BrainRoot "memory\MemoryService.ps1")
. (Join-Path $BrainRoot "knowledge\KnowledgeContextResult.ps1")
. (Join-Path $BrainRoot "knowledge\KnowledgeService.ps1")

. (Join-Path $BrainRoot "planning\PlanningContextResult.ps1")
. (Join-Path $BrainRoot "planning\PlanningService.ps1")

. (Join-Path $BrainRoot "decision\DecisionContextResult.ps1")
. (Join-Path $BrainRoot "decision\DecisionService.ps1")

. (Join-Path $BrainRoot "execution\BrainAction.ps1")
. (Join-Path $BrainRoot "execution\BrainActionResult.ps1")
. (Join-Path $BrainRoot "execution\BrainActionRegistry.ps1")
. (Join-Path $BrainRoot "execution\ExecutionContextResult.ps1")
. (Join-Path $BrainRoot "execution\ExecutionService.ps1")
. (Join-Path $BrainRoot "execution\BrainExecutionHistory.ps1")
. (Join-Path $BrainRoot "execution\BrainActionBootstrap.ps1")

. (Join-Path $BrainRoot "reflection\ReflectionContextResult.ps1")
. (Join-Path $BrainRoot "reflection\ReflectionService.ps1")

. (Join-Path $BrainRoot "pipeline\BrainPipelineResult.ps1")
. (Join-Path $BrainRoot "pipeline\BrainPipelineRegistry.ps1")
. (Join-Path $BrainRoot "pipeline\BrainPipelineBootstrap.ps1")
. (Join-Path $BrainRoot "pipeline\BrainStageExecutor.ps1")
. (Join-Path $BrainRoot "pipeline\BrainPipeline.ps1")
. (Join-Path $BrainRoot "diagnostics\BrainStatus.ps1")
. (Join-Path $BrainRoot "diagnostics\BrainSelfTest.ps1")

$runtime = Join-Path $BrainRoot "runtime"


if(Test-Path (Join-Path $runtime "BrainRuntimeStorage.ps1"))
{
    . (Join-Path $runtime "BrainRuntimeStorage.ps1")
}

Initialize-BrainServices
Initialize-BrainPipeline
Initialize-BrainActions























